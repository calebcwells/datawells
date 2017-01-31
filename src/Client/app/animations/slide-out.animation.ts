import { animate, keyframes, state, style, transition, trigger } from '@angular/core';

export const slideOutDown =
    trigger('slideOutDown', [
        state('inactive', style({ })),
        state('active', style({ opacity: 0 })),
        transition('inactive => active', animate('900ms ease-in', keyframes([
            style({ transform: 'translate3d(0, 50px, 0)', opacity: 1, offset: 0.2 }),
            style({ transform: 'translate3d(0, 150px, 0)', opacity: 1, offset: 0.4 }),
            style({ transform: 'translate3d(0, 250px, 0)', opacity: 1, offset: 0.6 }),
            style({ transform: 'translate3d(0, 350px, 0)', opacity: 1, offset: 0.8 }),
            style({ transform: 'translate3d(0, 450px, 0)', opacity: 1, offset: 0.9 }),
            style({ transform: 'translate3d(0, 2000px, 0)', opacity: 1, offset: 1 })
        ])))
    ]);
