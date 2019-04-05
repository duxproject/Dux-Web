import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { Location } from '../../../shared/services/location/location';
import { LocationService } from '../../../shared/services/location/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['../../../../assets/css/material-dashboard.css?v=2.1.1']
})
export class LocationComponent implements OnInit {
  locations: Location[];

  location : Location = {
    district: '',
    description: '',
    locationName: '',
    photoUrl1: '',
    photoUrl2: '',
    photoUrl3: '',
    photoUrl4: '',
    photoUrl5: '',
    videoUrl: '',
    loc: {
      longitude: 0,
      latitude: 0
    },
    verified: true
  };

  constructor(private authService : AuthService, private locationService: LocationService) { }

  district = ['Anuradhapura',
              'Ampara',
              'Badulla',
              'Batticaloa',
              'Colombo',
              'Galle',
              'Gampaha',
              'Hambantota',
              'Jafna',
              'Kalutara',
              'Kandy',
              'Kegalle',
              'Kilinochchi',
              'Kurunegala',
              'Mannar',
              'Mathale',
              'Mathara',
              'Monaragala',
              'Mullaitive',
              'Nuwara Eliya',
              'Polonnaruwa', 
              'Puttalam', 
              'Rathnapura', 
              'Trincomalee',
              'Vavniya'];



  ngOnInit() {
    this.locationService.getLocation().subscribe( locations => {
      this.locations = locations;
    });
  }

  onSubmit() {
    if (this.location.locationName !== '' && this.location.description !== '') {
      this.locationService.addLocation(this.location);
      this.location.locationName = '';
      this.location.description = '';
    }
}

}


