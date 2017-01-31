import { Component } from '@angular/core';
import { slideOutDown } from '../animations/slide-out.animation';

@Component({
  selector: 'data-wells-contact',
  templateUrl: './contact.component.html',
  animations: [ slideOutDown ]
})
export class ContactComponent {
    state: string = 'inactive';

    toggle() {
        event.preventDefault();
        this.state = 'active';
    }
}
