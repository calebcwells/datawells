import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { PageScrollConfig } from 'ng2-page-scroll';
import { pulse } from '../animations/pulse.animation';
import { fadeInLeft, fadeInRight, fadeInUp } from '../animations/fade-in.animation';

@Component({
  selector: 'data-wells-home',
  templateUrl: './home.component.html',
  animations: [
      pulse,
      fadeInLeft,
      fadeInRight,
      fadeInUp
  ]
})
export class HomeComponent {
    logo: string = 'dist/logo.png';
    fadeInType: string;
    fadeInLeft: string = 'inactive';
    fadeInRight: string = 'inactive';
    fadeInUp: string = 'inactive';
    currentYear: string;

    constructor(http: Http) {
        PageScrollConfig.defaultDuration = 500;

        http.get('/api/Contact/CurrentYear').subscribe(result => {
            this.currentYear = result.json();
        })
    }

    toggle(fadeInType) {
        if (fadeInType === 'fadeInLeft') {
            this.fadeInLeft = 'active';
        }
        if (fadeInType === 'fadeInRight') {
            this.fadeInRight = 'active';
        }
        if (fadeInType === 'fadeInUp') {
            this.fadeInUp = 'active';
        }
    }
}
