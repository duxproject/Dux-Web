import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/shared/services/location/location.service';
import { Location } from '../../../shared/services/location/location';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['../../../../assets/css/material-dashboard.min.css']
})
export class LocationListComponent implements OnInit {
  title = 'Dux-Web | Admin Dashboard';
  locations: Location[];

  constructor(public locationService: LocationService, private authService: AuthService) { }

  ngOnInit() {
    this.locationService.getLocation().subscribe( locations => {
      this.locations = locations;
    });
  }

}
