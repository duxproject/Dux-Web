import { Component, OnInit } from '@angular/core';

import { AuthService } from "../../../shared/services/auth.service";

@Component({
  selector: newFunction(),
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthService) { }

  isLogged(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null ) ? true : false;
  }

  ngOnInit() {
  }

}
function newFunction(): string {
  return 'app-navbar';
}

