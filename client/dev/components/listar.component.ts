import {Component} from '@angular/core';
@Component({
    template:`
    <ul class="tabs left">
        <li [class.current]="tab == 1"><a (click)="setTab(1)">Portais</a></li>
        <li [class.current]="tab == 2"><a (click)="setTab(2)">Noticias</a></li>
        <li [class.current]="tab == 3"><a (click)="setTab(3)">Ultimas Noticias</a></li>
    </ul>
    
    <div *ngIf="tab == 1" class="tab-content">
        <div>
            <input type="checkbox" id="check1" />
            <label for="check1" class="inline">Checkbox Field</label>
        </div>
        <div>
            <input type="checkbox" id="check1" />
            <label for="check1" class="inline">Checkbox Field</label>
        </div>
        <div>
            <input type="checkbox" id="check1" />
            <label for="check1" class="inline">Checkbox Field</label>
        </div>
    </div>
    <div *ngIf="tab == 2" class="tab-content">Tab2</div>
    <div *ngIf="tab == 3" class="tab-content">Tab3</div>
    `
})
export class ListarComponent{
    private tab;

    constructor(){
        this.tab = 1;
    }

    setTab(id){
        this.tab = id;
    }
}