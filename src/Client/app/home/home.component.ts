import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
    currentYear: string;

    constructor(http: Http) {
        http.get('/api/Contact/CurrentYear').subscribe(result => {
            this.currentYear = result.json();
        })
    }
}
