import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from "../../../shared/services/auth.service";
import { Router } from "@angular/router";
import { User } from "../../../shared/services/user/user";


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['../../../../assets/css/material-dashboard.min.css']
})
export class UserprofileComponent implements OnInit {
  title = 'Dux-Web | Admin Dashboard';
  user: User;

  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone
  ) { }

  
  

  ngOnInit() {  
    this.authService.getUser().subscribe( user => {
      this.user = user;
    });

   }

}
