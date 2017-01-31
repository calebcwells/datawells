import { animate, keyframes, state, style, transition, trigger } from '@angular/core';

export const pulse =
    trigger('pulse', [
        state('inactive', style({ })),
        state('active', style({ })),
        transition('inactive <=> active', animate('1s', keyframes([
            style({transform: 'scale3d(1, 1, 1)', offset: 0}),
            style({transform: 'scale3d(1.05, 1.05, 1.05)', offset: 0.5}),
            style({transform: 'scale3d(1, 1, 1)', offset: 1})
        ]))),
        transition('void => active', animate('600ms 300ms ease-in-out', keyframes([
            style({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
            style({ transform: 'scale3d(1.05, 1.05, 1.05)', offset: 0.2 }),
            style({ transform: 'scale3d(1, 1, 1)', offset: 0.5 }),
            style({ transform: 'scale3d(1.05, 1.05, 1.05)', offset: 0.8 }),
            style({ transform: 'scale3d(1, 1, 1)', offset: 1 })
        ])))
    ]);
