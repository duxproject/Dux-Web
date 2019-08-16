import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['../../../../assets/css/material-dashboard.min.css']
})
export class SideBarComponent implements OnInit {

  constructor(public authService:AuthService) { }

  ngOnInit() {
  }

}
