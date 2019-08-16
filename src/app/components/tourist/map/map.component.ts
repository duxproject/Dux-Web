import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['../../../../assets/css/material-dashboard.min.css']
})
export class MapComponent implements OnInit {

  constructor(public authService:AuthService) { }

  ngOnInit() {
  }

}
