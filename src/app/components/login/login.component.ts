import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { routeFadeStateTrigger, routeSlideStateTrigger } from '../../shared/route-animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    routeFadeStateTrigger,
    routeSlideStateTrigger
  ]
})
export class LoginComponent implements OnInit {

  @HostBinding('@routeSlideState') routeAnimation = true;

  constructor() {}

  ngOnInit() {
  }

}
