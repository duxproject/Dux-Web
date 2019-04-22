import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-travel-plan',
  templateUrl: './travel-plan.component.html',
  styleUrls: ['../../../../assets/css/material-dashboard.min.css']
})
export class TravelPlanComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
