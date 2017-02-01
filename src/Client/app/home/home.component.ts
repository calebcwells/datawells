import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { PageScrollConfig } from 'ng2-page-scroll';
import { pulse } from '../animations/pulse.animation';

@Component({
  selector: 'data-wells-home',
  templateUrl: './home.component.html',
  animations: [ pulse ]
})
export class HomeComponent {
    logo: string = 'dist/logo.png';
    currentYear: string;

    constructor(http: Http) {
        PageScrollConfig.defaultDuration = 500;

        http.get('/api/Contact/CurrentYear').subscribe(result => {
            this.currentYear = result.json();
        });
    }
}
