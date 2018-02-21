import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  displayDetails = false;
  logArray = [];
  logCount = 0;

  constructor() {
    this.logCount = 0;
  }

  onDisplayDetailsClicked() {
    this.displayDetails = this.displayDetails ? false : true;
    //this.displayDetails = !this.displayDetails;
    this.logCount = this.logCount + 1;
    this.logArray.push(this.logCount);
    //this.logArray/push(this.log.length + 1);
    //this.logArray.push(new Date());
  }

  getColor() {
    if (this.logCount >= 5) {
      return 'blue';
    } else {
      return 'transparent';
    }
  }
}
