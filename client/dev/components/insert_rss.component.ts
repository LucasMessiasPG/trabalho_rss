import { Component } from '@angular/core'
import {RssSingleComponent} from "./rss-single.component";
@Component({
    selector:'insert-rss',
    directives:[RssSingleComponent],
    template:`
    <form>
        <div class="col_12 column">
            <div class="col_12 column">
                <label class="col_12 column " for="titulo">Titulo <span class="right" [ngClass]="{'font-red':(rss.titulo && rss.titulo.length > 10)}">{{ (rss.titulo)?rss.titulo.length:0 }}/10</span></label>
                <input class="col_12 column" [ngClass]="{'error':(rss.titulo && rss.titulo.length > 10),'font-red':(rss.titulo && rss.titulo.length > 10)}" type="text" id="titulo" [(ngModel)]="rss.titulo">
            </div>
            <div class="col_12 column">
                <label class="col_12 column" for="mensagem">Mensagem <span class="right">{{ (rss.mensagem)?rss.mensagem.length:0 }}</span></label>
                <textarea class="col_12 column no-resize" name="mensagem" id="mensagem" cols="5" rows="5" [(ngModel)]="rss.mensagem"></textarea>
            </div>
            <button class="large green col_12 column">Enviar</button>
        </div>
    </form>
    `
})

export class InsertRssComponent{
    private rss:Object = {};
    
}