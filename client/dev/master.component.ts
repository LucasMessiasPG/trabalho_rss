import { Component } from '@angular/core';
import {NavBarComponent} from "./components/nav_bar.component";
import {HomeComponent} from "./components/home.component";
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import {InsertRssComponent} from "./components/insert_rss.component";
import {PesquisarComponent} from "./components/pesquisar.component";
import {DownloadComponet} from "./components/download.component";
import {UploadComponent} from "./components/upload.component";
import {ListarComponent} from "./components/listar.component";

@Component({
    selector: 'app',
    template: `
    <h1 class="center">RSS <i class="fa fa-rss"></i></h1>
    <nav-bar></nav-bar>
    <div class="grid">
        <router-outlet></router-outlet>
    </div>
    `,
    directives:[NavBarComponent,ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path:'/', name:'Home', component:HomeComponent,useAsDefault: true},
    {path:'/rss', name:'Rss', component:InsertRssComponent},
    {path:'/download', name:'Download', component:DownloadComponet},
    {path:'/upload', name:'Upload', component:UploadComponent},
    {path:'/listar', name:'Listar', component:ListarComponent},
    {path:'/pesquisar', name:'Pesquisar', component:PesquisarComponent},
])

export class MasterComponent { }