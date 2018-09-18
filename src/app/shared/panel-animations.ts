import { trigger, transition, style, animate, query, group } from "@angular/animations";

export const panelStateTrigger = trigger('panelState', [
    transition(':enter', [
        group([
            query('.card-header', [
                style({
                    transform: 'translateY(-300px)',
                    opacity: 0
                }),
                animate(300)
            ]),
            query('.card-body', [
                style({
                    transform: 'translateX(-100%)',
                    opacity: 0
                }),
                animate(300)
            ]),
            query('.card-footer', [
                style({
                    transform: 'translateY(300px)',
                    opacity: 0
                }),
                animate(300)
            ])
        ])
    ]),
    transition(':leave', [
        animate(200, style({
            transform: 'translateX(-100%)',
            opacity: 0
        }))
    ])
]);