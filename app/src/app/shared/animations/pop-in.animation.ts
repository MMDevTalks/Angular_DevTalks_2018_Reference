import { animate, keyframes, style, transition, trigger } from '@angular/animations';

export function popIn(duration: number) {
    return trigger('popInAnimation', [
        transition('out=>in', [
            animate(`${duration}s ease-in-out`, keyframes([
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
