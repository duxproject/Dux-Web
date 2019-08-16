import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { User } from "../../../shared/services/user/user";

@Component({
  selector: 'app-tour-dashboard',
  templateUrl: './tour-dashboard.component.html',
  styleUrls: ['../../../../assets/css/material-dashboard.min.css']
})
export class TourDashboardComponent implements OnInit {

  title = 'Dux-Web | tour-dashboard';
  user:User;

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
