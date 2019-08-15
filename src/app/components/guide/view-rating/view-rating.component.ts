import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-view-rating',
  templateUrl: './view-rating.component.html',
  styleUrls: ['../../../../assets/css/material-dashboard.min.css']
})
export class ViewRatingComponent implements OnInit {

  constructor(public authService:AuthService) { }

  ngOnInit() {
  }

}
