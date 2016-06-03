import {Component} from '@angular/core';
@Component({
    template:`
    <button (click)="upload()">Upload File</button>
    `
})
export class UploadComponent{
    upload(){
        console.log(1)
    }
}