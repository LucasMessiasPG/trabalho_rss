import { bootstrap }    from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS }    from '@angular/router-deprecated';
import { HTTP_PROVIDERS }    from '@angular/http';
import {MasterComponent} from "./master.component";
import {RssService} from "./service/rss.service";

bootstrap(MasterComponent,[ROUTER_PROVIDERS,HTTP_PROVIDERS,RssService]);