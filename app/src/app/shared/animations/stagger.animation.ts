import { animate, keyframes, query, stagger, style, transition, trigger } from '@angular/animations';

export function staggerAnimation(staggerStepDuration: number, animationDuration: number) {
    return trigger('staggerAnimation', [
        transition('* => *', [

            query(':enter', style({ opacity: 0, transform: 'scale(0.3)' }), { optional: true }),

            query(':enter', stagger(`${staggerStepDuration}ms`, [
                animate(`${animationDuration}ms ease-in-out`, keyframes([
                    style({ opacity: 0, transform: 'scale(0.6) translateY(-20px)', offset: 0 }),
                    style({ opacity: .5, transform: 'scale(1.1)  translateY(100px)', offset: 0.6 }),
                    style({ opacity: 1, transform: 'scale(1)  translateY(0px)', offset: 1.0 }),
                ]))]), { optional: true }),
        ])
    ]);
}
