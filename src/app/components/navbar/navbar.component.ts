import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;
  showInlineForm = true;
  constructor(private router: Router) {
    this.router.events.subscribe(
      (event: any) => {
        if (event && this.router.url === '/') {
          this.showInlineForm = true;
        }else {
          this.showInlineForm = false;
        }
      }
    );
  }

  ngOnInit() {
  }

}
