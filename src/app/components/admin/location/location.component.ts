import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { Location } from '../../../shared/services/location/location';
import { LocationService } from '../../../shared/services/location/location.service';
import * as $ from 'jquery';
declare var ol: any;

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['../../../../assets/css/material-dashboard.css?v=2.1.1']
})
export class LocationComponent implements OnInit {
  latitude: number = 6;
  longitude: number = 80;

  map: any;

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
      longitude:  '',
      latitude: ''
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
    var mousePositionControl = new ol.control.MousePosition({
      coordinateFormat: ol.coordinate.createStringXY(4),
      projection: 'EPSG:4326',
      // comment the following two lines to have the mouse position
      // be placed within the map.
      className: 'custom-mouse-position',
      target: document.getElementById('mouse-position'),
      undefinedHTML: '&nbsp;'
    });


    this.map = new ol.Map({
      target: 'map',
      controls: ol.control.defaults({
        attributionOptions: {
          collapsible: false
        }
      }).extend([mousePositionControl]),
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([79.859619140625, 6.930062160235181]),
        zoom: 8
      })
    });

    this.map.on('click', function (args) {
      var lonlat = ol.proj.transform(args.coordinate, 'EPSG:3857', 'EPSG:4326');
    
      var lon = lonlat[0];
      var lat = lonlat[1];

      localStorage.setItem('lat', JSON.stringify(lat));
      localStorage.setItem('long', JSON.stringify(lon));
    });

    $(".btn1").click(function() {
      $('html,body').animate({
          scrollTop: $(".addloc").offset().top},
          'slow');
    });

    
  }

  getlat(): string {
    const lat = JSON.parse(localStorage.getItem('lat'));
    return lat;
  }

  getlong(): string {
    const long = JSON.parse(localStorage.getItem('long'));
    return long;
  }

  onSubmit() {
    if (this.location.locationName !== '' && this.location.description !== '') {
      this.locationService.addLocation(this.location);
      this.location.locationName = '';
      this.location.description = '';
      this.location.loc.latitude = '';
      this.location.loc.longitude = '';
    }
}

}


