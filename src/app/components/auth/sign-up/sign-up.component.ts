import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../shared/services/auth.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() { }
  getUrl()
  {
    return "url('https://loveincorporated.blob.core.windows.net/contentimages/fullsize/8d311461-e6ec-4e5a-9eab-6a117a43f9c1-woman-travelling-alone.jpg')";
  }

}