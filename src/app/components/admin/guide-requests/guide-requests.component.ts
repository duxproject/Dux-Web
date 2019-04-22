import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user/user.service';
import { User } from '../../../shared/services/user/user';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-guide-requests',
  templateUrl: './guide-requests.component.html',
  styleUrls: ['../../../../assets/css/material-dashboard.css?v=2.1.1']
})
export class GuideRequestsComponent implements OnInit {
  title = 'Dux-Web | Admin Dashboard';
  users: User[];

  constructor(private userService: UserService, 
              private AuthService: AuthService) { }

  ngOnInit() {
    this.userService.getUser().subscribe( users => {
      this.users = users;
    });
  }

}
