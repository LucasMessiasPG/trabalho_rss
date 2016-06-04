import { Component } from '@angular/core'
import {InsertRssComponent} from "./insert_rss.component";
import {RssSingleComponent} from "./rss-single.component";
import {RssService} from "../service/rss.service";
@Component({
    template:`
    <div class="col_12">
        <ul class="icons">
            <li *ngFor="let post of posts">
                <rss-single [rss]="post"></rss-single>
            </li>
        </ul>
    </div>
    `,
    directives:[InsertRssComponent,RssSingleComponent]
})
export class HomeComponent{
    private posts:Array<any> = [];

    constructor(private _rssService:RssService){
        for(var i = 0 ; i < 10 ; i++) {
            this.posts.push({title: 'titulo ' + i, mensagem: 'descricao ' + i})
        }
    }
    ngOnInit(){
        // var request = this._rssService.filter({titulo:'caso'}).subscribe(res => console.log(res));
        // request.then(res => console.log(res))
    }
}

