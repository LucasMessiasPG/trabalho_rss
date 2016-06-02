import { Component } from '@angular/core'
@Component({
    selector: 'rss-single',
    template:`
    <div>
        <h6>{{ rss.title }}</h6>
        <p>{{ rss.mensagem }}</p>
    </div>
    `,
    inputs:['rss']
})
export class RssSingleComponent{
    private rss;
}