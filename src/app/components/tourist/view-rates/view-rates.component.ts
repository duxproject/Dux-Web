import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-view-rates',
  templateUrl: './view-rates.component.html',
  styleUrls: ['../../../../assets/css/material-dashboard.min.css']
})
export class ViewRatesComponent implements OnInit {

  constructor(public authService:AuthService) { }

  ngOnInit() {
  }

}
