import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['../../../../assets/css/material-dashboard.min.css']
})
export class SideNavComponent implements OnInit {

  constructor(public authService: AuthService,) { }

  ngOnInit() {
  }

}
