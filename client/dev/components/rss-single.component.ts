import { Component,Inject } from '@angular/core'
import { Http,Headers } from '@angular/http'
import 'rxjs/add/operator/toPromise';
declare var $: any;

@Component({
    selector: 'rss-single',
    template:`
    <div>
        <h6>{{ rss.titulo }}</h6>
        <p>{{ rss.gravata }}</p>
        <p *ngIf="rss.email">{{ rss.email }}</p>
        <p>
            <a href="{{ rss.link }}" target="_blank">Link</a> -
            <a (click)="AbrirComentario()">Comentar</a></p>
        <div *ngIf="(rss.comentario && rss.comentario == true)">
            <ul>
                <li *ngFor="let com of comentarios">
                    <p>{{ com.email }} - {{ com.created_at }}</p>           
                    <p>{{ com.comentario }}</p>
                </li>
            </ul>
            <div>
                <label for="email">Email*</label>
                <input type="text" id="email" [(ngModel)]="comentario.email">
                <label for="comentario">Mensagem</label>
                <input type="text" id="comentario" [(ngModel)]="comentario.comentario">
                <button (click)="enviarComentario()">Enviar</button>
            </div>
        </div>        
    </div>
    `,
    inputs:['rss']
})
export class RssSingleComponent{
    private rss;
    private _url = 'http://localhost:8000/comentario/';
    private comentarios = [];
    private comentario = {};

    constructor(@Inject(Http) private _http: Http){}

    private CarregarComentarios(){
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        this._http.get(this._url+'get/'+this.rss.id_noticia,{headers:headers})
            .toPromise()
            .then(res => {
                let comentarios = res.json().json;
                this.comentarios = comentarios;
            })
    }

    AbrirComentario(){
        this.CarregarComentarios();
        this.rss.comentario = !this.rss.comentario;
    }


    enviarComentario(){
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.comentario.id_noticia = this.rss.id_noticia;
        let filter = this.comentario;
        let body = $.param(filter);
        this._http.post(this._url+'create',body,{headers:headers})
            .toPromise()
            .then(()=>data);
        this.CarregarComentarios();
        this.comentario = {};
    }
}