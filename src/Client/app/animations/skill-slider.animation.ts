import { Component, animate, state, style, transition, trigger } from '@angular/core';

@Component({
    selector: 'skill-slider',
    animations: [
        trigger('slideOver', [
            state('closed', style({ width: '0%', height: '*' })),
            state('open', style({ width: '100%', height: '*' })),
            transition('* => *', [
                animate(200)
            ])
        ])
    ],
    template: `
        <div class="skill-image"
             (mouseenter)="toggle()"
             [@slideOver]="open ? 'open' : 'closed'">
                <ng-content select="[skill-image]"></ng-content>
        </div>
        <div class="skill-info"
             (mouseleave)="toggle()"
             [@slideOver]="open ? 'closed' : 'open'">
                <ng-content select="[skill-info]" ></ng-content>
        </div>
   `
})
export class SkillSliderComponent {
    public open = true;

    toggle() {
        this.open = !this.open;
    }
}
