import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(".btn1").click(function() {
      $('html,body').animate({
          scrollTop: $(".two").offset().top},
          'slow');
    });
  }
  getUrl()
  {
    return "url('https://loveincorporated.blob.core.windows.net/contentimages/fullsize/8d311461-e6ec-4e5a-9eab-6a117a43f9c1-woman-travelling-alone.jpg')";
  }
  getUrl2()
  {
    return "url('http://wallsdesk.com/wp-content/uploads/2016/10/Sri-Lanka-4K.jpg')";
  }

  
}

