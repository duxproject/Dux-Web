import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-view-places',
  templateUrl: './view-places.component.html',
  styleUrls: ['../../../../assets/css/material-dashboard.min.css']
})
export class ViewPlacesComponent implements OnInit {

  constructor(public authService:AuthService) { }

  ngOnInit() {
  }

}
