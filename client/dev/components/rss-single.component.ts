import { Component } from '@angular/core'
@Component({
    selector: 'rss-single',
    template:`
    <div>
        <h6>{{ rss.titulo }}</h6>
        <p>{{ rss.gravata }}</p>
        <p><a href="{{ rss.link }}" target="_blank">Link</a></p>
        <p>{{ rss.email }}</p>
    </div>
    `,
    inputs:['rss']
})
export class RssSingleComponent{
    private rss;
}