import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../shared/services/auth.service";
import { UserService } from '../../../shared/services/user/user.service';
import { User } from "../../../shared/services/user/user";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  users: User[];
  user:User;

  constructor(public authService: AuthService, public userService: UserService) { }


  isLogged(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null) ? true : false;

  }

  ngOnInit() {
    this.authService.getUser().subscribe( user => {
      this.user = user;
    });
  }

}
