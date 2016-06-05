import {Component,Inject} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {RssSingleComponent} from "./rss-single.component";
declare var $: any;
@Component({
    template:`
    <label for="pesquisar">Palavra Chave</label>
    <input type="text" id="pesquisar" [(ngModel)]="termo">
    <button (click)="pesquisar(termo)">Pesquisar</button>
    <div>
        <ul *ngIf="(posts && posts.length > 0)" class="icons">
            <li *ngFor="let post of posts">
                <rss-single [rss]="post"></rss-single>
            </li>
        </ul>
        <p class="font-red">{{ msg }}</p>
    </div>
    `,
    directives:[RssSingleComponent]
})
export class PesquisarComponent{
    private termo;
    private posts;
    private msg = '';

    constructor(@Inject(Http) private _http:Http){}
    
    pesquisar(termo){
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');


        let filter = {pesquisa:termo};
        let body = $.param(filter);
        this._http.post('http://localhost:8000/rss/filter',body,{headers:headers})
            .toPromise()
            .then(res => {
                let posts = res.json()
                if(posts.status == 'success') {
                    if (posts.json) {
                        this.posts = posts.json
                        this.msg = '';
                    } else {
                        this.posts = []
                        this.msg = 'Não foi encontrado nenhum RSS com esses parametros'
                    }
                }else{
                    this.msg = posts.error
                }
            })
    }
}