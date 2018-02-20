import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  selector: 'app-servers',
//  template: `<app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewserver = false;
  serverCreationStatus = "No server was created!!";
  constructor() {
    setTimeout(() => {
      this.allowNewserver = true;
    },2000);
  }

  ngOnInit() {
  }

  onCreatedServer() {
    this.serverCreationStatus = "Server was created!";
  }

}
