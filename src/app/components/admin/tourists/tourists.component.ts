import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user/user.service';
import { User } from '../../../shared/services/user/user';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-tourists',
  templateUrl: './tourists.component.html',
  styleUrls: ['./tourists.component.css']
})
export class TouristsComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService, private AuthService: AuthService) { }

  ngOnInit() {
    this.userService.getUser().subscribe( users => {
      this.users = users;
    });
  }

}
