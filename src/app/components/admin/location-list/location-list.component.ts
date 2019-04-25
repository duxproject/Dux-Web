import { Component, OnInit, OnDestroy } from '@angular/core';
import { LocationService } from 'src/app/shared/services/location/location.service';
import { Location } from '../../../shared/services/location/location';
import { AuthService } from '../../../shared/services/auth.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['../../../../assets/css/material-dashboard.min.css']
})
export class LocationListComponent implements OnInit, OnDestroy {
  title = 'Dux-Web | Admin Dashboard';
  locations: Location[];
  paramsSubscription: any;

  constructor(private route: ActivatedRoute, public locationService: LocationService, public authService: AuthService) { }


  getLoc() {
    const loc = JSON.parse(localStorage.getItem('locations'));
    this.locations = loc; 
  }

  ngOnInit() {

    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.getLoc();
      this.locationService.getLocation().subscribe( locations => {
        this.locations = locations;
        localStorage.setItem('locations', JSON.stringify(locations));
      });
    });

 }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
