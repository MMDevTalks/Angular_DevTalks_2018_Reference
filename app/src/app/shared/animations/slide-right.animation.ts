import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

export function slideFromRight() {
    return trigger('slideRightAnimation', [
        state('void', style({ position: 'fixed', transform: 'translateX(110%)' })),
        state('true', style({ transform: 'translateX(0%)' })),
        transition('void => *, false=>*', [
            animate('0.45s cubic-bezier(0.55, 0.9, 0.55, 1.5)', keyframes([
                style({ transform: 'translateX(100%)' }),
                style({ transform: 'translateX(80%)' }),
                style({ transform: 'translateX(50%)' }),
                style({ transform: 'translateX(40%)' }),
                style({ transform: 'translateX(30%)' }),
                style({ transform: 'translateX(-5%)' }),
                style({ transform: 'translateX(0%)' }),
            ])),
        ]),
        transition('true => *', [
            animate('0.45s cubic-bezier(0.55, 0.9, 0.55, 1.5)', keyframes([
                style({ transform: 'translateX(0%)' }),
                style({ transform: 'translateX(-5%)' }),
                style({ transform: 'translateX(30%)' }),
                style({ transform: 'translateX(40%)' }),
                style({ transform: 'translateX(50%)' }),
                style({ transform: 'translateX(80%)' }),
                style({ transform: 'translateX(100%)' })
            ])),
        ]),
    ]);
}
