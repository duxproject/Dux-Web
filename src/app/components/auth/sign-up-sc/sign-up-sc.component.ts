import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up-sc',
  templateUrl: './sign-up-sc.component.html',
  styleUrls: ['./sign-up-sc.component.css']
})
export class SignUpScComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getUrl()
  {
    return "url('https://loveincorporated.blob.core.windows.net/contentimages/fullsize/8d311461-e6ec-4e5a-9eab-6a117a43f9c1-woman-travelling-alone.jpg')";
  }

}
