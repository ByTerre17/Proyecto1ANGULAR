import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './app-routing.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class AppComponent {
  title = 'Proyecto1';
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }
  
}

