import { animate, keyframes, style, transition, trigger } from '@angular/animations';

export function popIn() {
    return trigger('popInAnimation', [
        transition(':enter', [
            animate('0.35s ease-in-out', keyframes([
                style({ transform: 'scale(0)' }),
                style({ transform: 'scale(0.3)' }),
                style({ transform: 'scale(0.5)' }),
                style({ transform: 'scale(0.7)' }),
                style({ transform: 'scale(1)' }),
                style({ transform: 'scale(1.2)' }),
                style({ transform: 'scale(1)' }),
            ]))
        ]),
    ]);
}
