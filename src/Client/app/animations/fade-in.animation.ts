import { animate, keyframes, state, style, transition, trigger } from '@angular/core';

export const fadeInLeft =
    trigger('fadeInLeft', [
        state('inactive', style({ opacity: 0 })),
        state('active', style({})),
        transition('inactive => active', animate('900ms ease-in', keyframes([
            style({ transform: 'translate3d(-100%, 0, 0)', opacity: 0, offset: 0 }),
            style({ transform: 'none', opacity: 1, offset: 1 })
        ])))
    ]);

export const fadeInRight =
    trigger('fadeInRight', [
        state('inactive', style({ opacity: 0 })),
        state('active', style({})),
        transition('inactive => active', animate('900ms ease-in', keyframes([
            style({ transform: 'translate3d(100%, 0, 0)', opacity: 0, offset: 0 }),
            style({ transform: 'none', opacity: 1, offset: 1 })
        ])))
    ]);

export const fadeInUp =
    trigger('fadeInUp', [
        state('inactive', style({ opacity: 0 })),
        state('active', style({})),
        transition('inactive => active', animate('900ms ease-in', keyframes([
            style({ transform: 'translate3d(0, 300%, 0)', opacity: 0, offset: 0 }),
            style({ transform: 'none', opacity: 1, offset: 1 })
        ])))
    ]);
