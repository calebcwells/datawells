import { Component } from '@angular/core';
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

    constructor() {
        PageScrollConfig.defaultDuration = 500;
        this.currentYear = new Date().getFullYear().toString();
    }
}
