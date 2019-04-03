import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../shared/services/auth.service';


@Component({
  selector: 'app-sign-up-admin',
  templateUrl: './sign-up-admin.component.html',
  styleUrls: ['./sign-up-admin.component.css']
})
export class SignUpAdminComponent implements OnInit {


  constructor(private authService: AuthService) { }


  ngOnInit() {
  }

}
