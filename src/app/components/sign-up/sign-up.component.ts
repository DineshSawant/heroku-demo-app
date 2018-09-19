import { Component, HostBinding, OnInit } from '@angular/core';

import { routeFadeStateTrigger, routeSlideStateTrigger } from '../../shared/route-animations';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  animations: [
    routeFadeStateTrigger,
    routeSlideStateTrigger
  ]
})
export class SignUpComponent implements OnInit {
  @HostBinding('@routeSlideState') routeAnimation = true;
  constructor() { }

  ngOnInit() {
  }

}
