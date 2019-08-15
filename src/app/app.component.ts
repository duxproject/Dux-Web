import { Component } from '@angular/core';
declare var ol: any;
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dux-Web';
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    $('body').addClass('df');
    }
}
