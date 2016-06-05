import { Injectable } from '@angular/core';
import { Headers,Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RssService{
    public list = [];
    private _url = 'http://localhost:8000/rss/filter';

    constructor( private _http: Http){}
    
    filter(filter): Promise<any[]> {
        let headers = new Headers({
            'Content-Type': 'application/json'});

        return this._http.post(this._url,JSON.stringify(filter),{headers:headers})
            .toPromise()
            .then(res => res.json().data)
    }

}