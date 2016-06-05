import { Component,Inject } from '@angular/core'
import { Http,Headers } from '@angular/http'
import {InsertRssComponent} from "./insert_rss.component";
import {RssSingleComponent} from "./rss-single.component";
import 'rxjs/add/operator/toPromise';
declare var $: any;

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
export class HomeComponent{
    private posts:Array<any> = [];
    private msg = '';

    constructor(@Inject(Http) private _http:Http){}

    ngOnInit(){
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');


        let filter = {};
        let body = $.param(filter);
        this._http.post('http://localhost:8000/rss/filter',body,{headers:headers})
            .toPromise()
            .then(res => {
                let posts = res.json().json
                if(posts.length > 0) {
                    this.posts = posts
                    this.msg = '';
                }else {
                    this.posts = []
                    this.msg = 'Não foi encontrado nem um RSS, Por favor insira novos RSS'
                }
            })
    }
}

