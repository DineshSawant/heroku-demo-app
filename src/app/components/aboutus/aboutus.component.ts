import { Component, HostBinding, OnInit } from '@angular/core';

import { routeFadeStateTrigger, routeSlideStateTrigger } from '../../shared/route-animations';
import { panelStateTrigger } from '../../shared/panel-animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  text = {};
  showPanel = false;
  // @HostBinding('@routeFadeState') routeAnimation = true;
  @HostBinding('@routeSlideState') routeAnimation = true;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getDetails() {
    this.http.get('/api/users').subscribe(
      data => {
        this.text = data;
      },
      err => console.log(),
      () => console.log('Done'));
  }
}
