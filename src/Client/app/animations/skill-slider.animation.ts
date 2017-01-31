import { Component, OnInit, animate, state, style, transition, trigger } from '@angular/core';

@Component({
    selector: 'skill-slider',
    animations: [
        trigger('slideOver', [
            state('closed', style({ width: '0%', height: '*', opacity: 0 })),
            state('open', style({ width: '100%', height: '*' })),
            transition('* => *', [
                animate(200)
            ])
        ])
    ],
    template: `
<div [hidden]="hidden">
        <div class="skill-image"
             (mouseenter)="toggle()"
             [@slideOver]="open ? 'open' : 'closed'">
                <ng-content select="[skill-image]"></ng-content>
        </div>
        <div class="skill-info"
             (mouseleave)="toggle()"
             [hidden]="hidden"
             [@slideOver]="open ? 'closed' : 'open'">
                <ng-content select="[skill-info]" ></ng-content>
        </div>
</div>
   `
})
export class SkillSliderComponent implements OnInit {
    open: boolean = true;
    hidden: boolean = true;

    toggle() {
        this.open = !this.open;
    }

    ngOnInit(): void {
        this.hidden = false;
    }
}
