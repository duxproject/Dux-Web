import { Component } from '@angular/core';
declare var ol: any;
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularfirebase-authentication';
  ngOnInit() {
    $('body').addClass('df');
    }

    
}
