import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { Location } from '../../../shared/services/location/location';
import { LocationService } from '../../../shared/services/location/location.service';
import { } from '../map/map.component';
import { Params } from '@angular/router';
declare var ol: any;

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['../../../../assets/css/material-dashboard.min.css']
})
export class LocationComponent implements OnInit {
  title = 'Dux-Web | Admin Dashboard';


  location: Location = {
    description: '',
    locationName: '',
    loc: {
      longitude: '',
      latitude: ''
    },
    verified: true
  };

  constructor(public authService: AuthService, private locationService: LocationService) { }


  ngOnInit() {
    const loca = JSON.parse(localStorage.getItem('loc'));
    this.location.locationName = loca.address;
    this.location.loc.longitude = loca.latlng.lng;
    this.location.loc.latitude = loca.latlng.lat;
  }

  getname(): string {
    const loc = JSON.parse(localStorage.getItem('loc'));
    return loc.address;
  }

  getlat(): string {
    const loc = JSON.parse(localStorage.getItem('loc'));
    return loc.latlng.lat;
  }

  getlong(): string {
    const loc = JSON.parse(localStorage.getItem('loc'));
    return loc.latlng.lng;
  }

  onSubmit() {
    const a = JSON.parse(localStorage.getItem('loc'));
    if (a !== '' && this.location.description !== '') {
      this.locationService.addLocation(this.location);
      this.location.locationName = '';
      this.location.description = '';
      this.location.loc.latitude = '';
      this.location.loc.longitude = '';
    }
    else {
      console.log("Could not submit");
    }
  }

}
