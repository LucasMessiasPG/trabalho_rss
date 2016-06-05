import {Component} from '@angular/core';
import {FILE_UPLOAD_DIRECTIVES, FileUploader} from 'ng2-file-upload/ng2-file-upload'

/**
 * Layout para Upload
 */
@Component({
    template:`
    <div class="grid">
        <div class="col_4 column">
            <label class="col_12 column" for="file">Selecione seu XML</label>
            <input class="col_12 column"  type="file" id="file" ng2FileSelect [uploader]="uploader" />
        </div>
        <div class="col_12 column"  *ngFor="let item of uploader.queue">
            <table class="col_12 column" >
                <tr>
                    <th>Nome do aquirvo</th>
                    <th>Extenção</th>
                    <th>Opções</th>
                </tr>
                <tr>
                    <td><label>{{ item._file.name }}</label></td>
                    <td><label [ngClass]="{'font-red':item.fail,'font-green':item.fail === false}">{{ item.file.type }}</label></td>
                    <td>
                        <button class="small orange" (click)="enviar(item)">Enviar</button>
                        <button class="small red" (click)="item.remove()">Remover</button>
                    </td>
                </tr>
            </table>
            
        </div>
    </div>
    `,
    directives:[FILE_UPLOAD_DIRECTIVES]
})

/**
 * Controller para Upload
 */
export class UploadComponent{
    /**
     * Url de integração com BACKEND
     * @type {string}
     * @private
     */
    private _url = 'http://localhost:8000/rss/import';
    /**
     * Instancia a biblioteca para fazer upload
     * @type {FileUploader}
     */
    public uploader:FileUploader = new FileUploader({url:this._url});

    /**
     * faz um requisição XHR para enviar o xml
     * @param item
     */
    enviar(item){
        /**
         * desativa as credenciais no backend
         * caso true nescessario enviar Authorization no header
         * @type {boolean}
         */
        item.withCredentials = false;
        if(item.file.type == 'text/xml') {
            item.upload()
            /**
             * Mostra para o usuario que seu envio foi feito
             * @type {boolean}
             */
            item.fail = false;
        }else{
            /**
             * Mosta para o usuario que seu aquivo nao é valido para envio
             * @type {boolean}
             */
            item.fail = true;
        }
    }
}