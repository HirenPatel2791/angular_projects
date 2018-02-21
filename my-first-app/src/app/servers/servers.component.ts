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
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  constructor() {
    // setTimeout(() => {
    //   this.allowNewserver = true;
    // },2000);
  }

  ngOnInit() {
  }

  onCreatedServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created named: " + this.serverName;
  }

  onUpdateServerName(event: any) {
    //console.log(event);
    //console.log(this.serverName);
    this.serverName = event.target.value;

    //this.serverName = (<HTMLInputElement>event.target).value;
  }

}
