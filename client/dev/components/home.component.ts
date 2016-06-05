import { Component,Inject } from '@angular/core'
import { Http,Headers } from '@angular/http'
import {InsertRssComponent} from "./insert_rss.component";
import {RssSingleComponent} from "./rss-single.component";
import 'rxjs/add/operator/toPromise';
declare var $: any;

/**
 * Layout para Home
 */
@Component({
    template:`
    <div class="col_12">
        <ul *ngIf="(posts && posts.length > 0)" class="icons">
            <li *ngFor="let post of posts">
                <rss-single [rss]="post"></rss-single>
            </li>
        </ul>
        <p class="font-red">{{ msg }}</p>
    </div>
    `,
    directives:[InsertRssComponent,RssSingleComponent]
})

/**
 * Controller para Home
 */
export class HomeComponent{
    /**
     * Array de Rss que será preemchido pelo backend
     * @type {Array}
     */
    private posts:Array<any> = [];
    /**
     * Mensagem de falha 
     * @type {string}
     */
    private msg = '';

    constructor(@Inject(Http) private _http:Http){}

    /**
     * Carrega os Rss para Home
     */
    ngOnInit(){
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');


        let filter = {};
        let body = $.param(filter);
        /**
         * Solicita via XHR os RSS para o BACKEND
         */
        this._http.post('http://localhost:8000/rss/filter',body,{headers:headers})
            .toPromise()
            .then(res => {
                /**
                 * filtra para json
                 */
                let posts = res.json()

                /**
                 * verifica se o filtro solicitado possui rss que esta dentro de json
                 */
                if(posts.json) {
                    this.posts = posts.json
                    this.msg = '';
                }else {
                    this.posts = []
                    this.msg = 'Não foi encontrado nem um RSS, Por favor insira novos RSS'
                }
            })
    }
}

