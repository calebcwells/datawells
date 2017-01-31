import { Component } from '@angular/core';
import { pulse } from '../animations/pulse.animation';

@Component({
    selector: 'data-wells-nav',
    templateUrl: './navigation.component.html',
    animations: [pulse]
})
export class NavigationComponent {
    logo: string = 'dist/logo.png';
    state: string = 'inactive';

    toggle() {
        this.state = (this.state === 'inactive' ? 'active' : 'inactive');
    }
}
