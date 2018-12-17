import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ids-enterprise-ng-quickstart';

  constructor() {
  }

  public clicked() {
    alert('Clicked me!');
  }
}
