import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { Location } from '../../../shared/services/location/location';
import { LocationService } from '../../../shared/services/location/location.service';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['../../../../assets/css/material-dashboard.css?v=2.1.1']
})
export class AddLocationComponent implements OnInit {
  locations: Location[];

  constructor(private authService : AuthService, private locationService: LocationService) { }

  ngOnInit() {
    this.locationService.getLocation().subscribe( locations => {
      this.locations = locations;
    });
  }

}