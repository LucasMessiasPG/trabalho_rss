import { Component,Inject } from '@angular/core'
import { Http,Headers } from '@angular/http'
import 'rxjs/add/operator/toPromise';
declare var $: any;

/**
 * Template para exibição de um unico RSS
 */
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
                    <img *ngIf="com.imgaem" src="{{ com.imgaem }}" alt="">           
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

/**
 * Controller Rss
 */
export class RssSingleComponent{
    /**
     * Rss que este templete esta mostrando
     */
    private rss;
    /**
     * Link para integração com o BACKEND
     * @type {string}
     * @private
     */
    private _url = 'http://localhost:8000/comentario/';
    /**
     * lista de comentarios deste RSS
     * @type {Array}
     */
    private comentarios = [];
    /**
     * Novo comentario para este rss
     * @type {{}}
     */
    private comentario = {};

    constructor(@Inject(Http) private _http: Http){}

    /**
     * Carrega todos os comentarios deste RSS
     * @constructor
     */
    private CarregarComentarios(){
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        /**
         * Faz um requisição ao BACKEND para buscar todos os comentarios cujo o id_noticia refere a este rss
         */
        this._http.get(this._url+'get/'+this.rss.id_noticia,{headers:headers})
            .toPromise()
            .then(res => {
                let comentarios = res.json().json;
                this.comentarios = comentarios;
            })
    }

    /**
     * Toogle a janela de comentarios
     * @constructor
     */
    AbrirComentario(){
        this.CarregarComentarios();
        this.rss.comentario = !this.rss.comentario;
    }

    /**
     * Envia o comentario para BACKEND
     */
    enviarComentario(){
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        /**
         * Incluir id_noticia no novo comentario criado
         */
        this.comentario.id_noticia = this.rss.id_noticia;
        let filter = this.comentario;
        let body = $.param(filter);
        this._http.post(this._url+'create',body,{headers:headers})
            .toPromise()
            .then(()=>data);
        /**
         * carrega todos os comentarios deste RSS
         */
        this.CarregarComentarios();
        /**
         * reseta os campos do novo comentario
         * @type {{}}
         */
        this.comentario = {};
    }
}