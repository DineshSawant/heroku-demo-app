import { Component, HostBinding, OnInit } from '@angular/core';

import { routeFadeStateTrigger, routeSlideStateTrigger } from '../../shared/route-animations';
import { panelStateTrigger } from '../../shared/panel-animations';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css'],
  animations: [
    routeFadeStateTrigger,
    routeSlideStateTrigger,
    panelStateTrigger
  ]
})
export class AboutusComponent implements OnInit {

  showPanel = false;
  // @HostBinding('@routeFadeState') routeAnimation = true;
  @HostBinding('@routeSlideState') routeAnimation = true;

  constructor() { }

  ngOnInit() {
  }

}
