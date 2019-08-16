import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-rate-list',
  templateUrl: './rate-list.component.html',
  styleUrls: ['../../../../assets/css/material-dashboard.min.css']
})
export class RateListComponent implements OnInit {

  constructor(public authService:AuthService) { }

  ngOnInit() {
  }

}
