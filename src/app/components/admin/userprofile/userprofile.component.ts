import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from "../../../shared/services/auth.service";
import { Router } from "@angular/router";
import { User } from "../../../shared/services/user";


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone
  ) { }

  getItem(): string{
    const user = JSON.parse(localStorage.getItem('user'));
    
    return user;
  }
  

  ngOnInit() {  
    
   }

}
