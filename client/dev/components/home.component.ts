import { Component } from '@angular/core'
import {InsertRssComponent} from "./insert_rss.component";
import {RssSingleComponent} from "./rss-single.component";
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

    constructor(){
        for(var i = 0 ; i < 10 ; i++) {
            this.posts.push({title: 'titulo ' + i, mensagem: 'descricao ' + i})
        }
    }
}

