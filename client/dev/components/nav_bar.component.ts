import { Component } from '@angular/core'
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated'
@Component({
    selector:'nav-bar',
    template:`
    <div class="grid">
        <ul class="button-bar">
            <li class="first"><a [routerLink]="['Home']"><i class="fa fa-home"></i> Home</a></li>
            <li><a title="Ultimas noticias" href="http://localhost:8000/rss/ultimas_noticias" target="_blank"><i class="fa fa-rss"></i> Rss</a></li>
            <li><a [routerLink]="['Pesquisar']"><i class="fa fa-search"></i> Pesquisar</a></li>
            <!--<li><a [routerLink]="['Listar']"><i class="fa fa-list"></i> Listar</a></li>-->
            <li><a [routerLink]="['Download']"><i class="fa fa-download"></i> Download</a></li>
            <li class="last"><a [routerLink]="['Upload']"><i class="fa fa-upload"></i> Upload</a></li>
        </ul>
    </div>
    `,
    directives:[ROUTER_DIRECTIVES]
})
export class NavBarComponent{}