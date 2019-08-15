import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['../../../../assets/css/material-dashboard.min.css']
})
export class PackageListComponent implements OnInit {

  constructor(public authService:AuthService) { }

  ngOnInit() {
  }

}
