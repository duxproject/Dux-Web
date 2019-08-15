import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-add-rates',
  templateUrl: './add-rates.component.html',
  styleUrls: ['../../../../assets/css/material-dashboard.min.css']
})
export class AddRatesComponent implements OnInit {

  constructor(public authService:AuthService) { }

  ngOnInit() {
  }

}
