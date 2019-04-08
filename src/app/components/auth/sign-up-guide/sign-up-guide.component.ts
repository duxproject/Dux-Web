import { Component, OnInit } from '@angular/core';

import { AuthService } from "../../../shared/services/auth.service";


@Component({
  selector: 'app-sign-up-guide',
  templateUrl: './sign-up-guide.component.html',
  styleUrls: ['./sign-up-guide.component.css']
})
export class SignUpGuideComponent implements OnInit {


  constructor(
    public authService: AuthService
    ) { }

  ngOnInit() {
  }

  getUrl()
  {
    return "url('https://loveincorporated.blob.core.windows.net/contentimages/fullsize/8d311461-e6ec-4e5a-9eab-6a117a43f9c1-woman-travelling-alone.jpg')";
  }

}
