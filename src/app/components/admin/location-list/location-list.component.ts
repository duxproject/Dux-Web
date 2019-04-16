import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/shared/services/location/location.service';
import { Location } from '../../../shared/services/location/location';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['../../../../assets/css/material-dashboard.css?v=2.1.1']
})
export class LocationListComponent implements OnInit {
  locations: Location[];

  constructor(public locationService: LocationService) { }

  ngOnInit() {
    this.locationService.getLocation().subscribe( locations => {
      this.locations = locations;
    });
  }

}
