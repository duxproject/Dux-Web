import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { Location } from '../../../shared/services/location/location';
import { LocationService } from '../../../shared/services/location/location.service';
import {  } from '../map/map.component';
declare var ol: any;

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['../../../../assets/css/material-dashboard.min.css']
})
export class LocationComponent implements OnInit {
  title = 'Dux-Web | Admin Dashboard';
  latitude: number = 6;
  longitude: number = 80;

  map: any;

  locations: Location[];

  location : Location = {
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

  constructor(public authService : AuthService, private locationService: LocationService) { }


  ngOnInit() {
    this.locationService.getLocation().subscribe( locations => {
      this.locations = locations;
    });


    var mousePositionControl = new ol.control.MousePosition({
      coordinateFormat: ol.coordinate.createStringXY(4),
      projection: 'EPSG:4326',
      // comment the following two lines to have the mouse position
      // be placed within the map.
      //className: 'custom-mouse-position',
      //target: document.getElementById('mouse-position'),
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
    const loc = JSON.parse(localStorage.getItem('loc'));
    const markers = [
      { lat: loc.latlng.lat, lng: loc.latlng.lng  },
      { lat: loc.latlng.lat, lng: loc.latlng.lng }
    ];
    const features = [];

    for (let i = 0; i < markers.length; i++) {
      const m = markers[i];
      const longitude = m.lng;
      const latitude = m.lat;

      const iconFeature = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([longitude, latitude], 'EPSG:4326', 'EPSG:3857'))
      });

      const iconStyle = new ol.style.Style({
        image: new ol.style.Icon(({
          anchor: [0.5, 1],
          src: 'http://cdn.mapmarker.io/api/v1/pin?text=P&size=40&hoffset=1'
        }))
      });

      iconFeature.setStyle(iconStyle);
      features.push(iconFeature);

    }


    this.map.on('click', function (args) {
      var lonlat = ol.proj.transform(args.coordinate, 'EPSG:3857', 'EPSG:4326');

      var lon = lonlat[0];
      var lat = lonlat[1];

      localStorage.setItem('lat', JSON.stringify(lat));
      localStorage.setItem('long', JSON.stringify(lon));
    });


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
  }

}
