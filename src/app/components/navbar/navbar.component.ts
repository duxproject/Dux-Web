import { Component, OnInit } from '@angular/core';

@Component({
  selector: newFunction(),
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
function newFunction(): string {
  return 'app-navbar';
}

