import { Component, HostBinding, OnInit } from '@angular/core';
import { routeFadeStateTrigger, routeSlideStateTrigger } from '../../shared/route-animations';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
  animations: [
    routeFadeStateTrigger,
    routeSlideStateTrigger
  ]
})
export class ForgotPasswordComponent implements OnInit {

  @HostBinding('@routeSlideState') routeAnimation = true;
  
  constructor() { }

  ngOnInit() {
  }

}
