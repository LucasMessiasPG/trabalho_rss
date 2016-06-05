import {Component, Inject} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {RssSingleComponent} from "./rss-single.component";
declare var $: any;
@Component({
    template:`
    <label for="pesquisar">Palavra Chave</label>
    <input type="text" id="pesquisar" [(ngModel)]="termo">
    <button (click)="pesquisar(termo)">Pesquisar</button>
    <button (click)="exportar(termo)">Exportar</button>
    <div>
        <ul class="icons">
            <li *ngFor="let post of posts">
                <rss-single [rss]="post"></rss-single>
            </li>
        </ul>
    </div>
    `,
    directives:[RssSingleComponent]
})
export class DownloadComponet{

    private termo;
    private posts = [];

    constructor(@Inject(Http) private _http:Http){}

    pesquisar(termo){
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');


        let filter = {pesquisa:termo};
        let body = $.param(filter);
        this._http.post('http://localhost:8000/rss/filter',body,{headers:headers})
            .toPromise()
            .then(res => {
                let posts = res.json().json
                this.posts = posts
            })
    }

    exportar(termo) {
        window.open('http://localhost:8000/rss/export/' + termo);
    }
    
}