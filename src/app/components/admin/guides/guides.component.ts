import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { User } from '../../../shared/services/user';

@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.css']
})
export class GuidesComponent implements OnInit {
  users: User[];


  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe( users => {
      this.users = users;
    });
  }

}
