import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-view-guide-profile',
  templateUrl: './view-guide-profile.component.html',
  styleUrls: ['../../../../assets/css/material-dashboard.min.css']
})
export class ViewGuideProfileComponent implements OnInit {

  imgSrc : string = '/assets/img/cover.jpg';

  formTemplate = new FormGroup({
    imageUrl: new FormControl('')
  })

  constructor() { }

  ngOnInit() {
  }

  

}
