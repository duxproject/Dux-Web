import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../shared/services/auth.service";

@Component({
  selector: 'app-sign-up-guide',
  templateUrl: './sign-up-guide.component.html',
  styleUrls: ['./sign-up-guide.component.css']
})
export class SignUpGuideComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
