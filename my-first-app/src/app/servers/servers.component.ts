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
  serverName = '';
  constructor() {
    // setTimeout(() => {
    //   this.allowNewserver = true;
    // },2000);
  }

  ngOnInit() {
  }

  onCreatedServer() {
    this.serverCreationStatus = "Server was created named: " + this.serverName;
  }

  onUpdateServerName(event: any) {
    console.log(event);
    console.log(this.serverName);
    this.serverName = event.target.value;

    if(this.serverName === '') {
      this.allowNewserver = false;
    }
    if(this.serverName !== '' || this.serverName !== null) {
      this.allowNewserver = true;
    }
    //this.serverName = (<HTMLInputElement>event.target).value;
  }

}
