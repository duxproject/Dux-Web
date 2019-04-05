import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../shared/services/auth.service";
import { UserService } from '../../../shared/services/user/user.service';
import { User } from '../../../shared/services/user/user';

@Component({
  selector: newFunction(),
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  users: User[];

  constructor(public authService: AuthService, private userService: UserService) { }


  isLogged(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  ngOnInit() {
  }

}
function newFunction(): string {
  return 'app-navbar';
}

