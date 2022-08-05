import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  // template: ` <app-server></app-server>
  //   <app-server></app-server>`,
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus = 'No server was created';
  whatHappens: string = 'You are the winner! 🥳';
  serverName: string = 'Test';

  serverCreated = false;

  servers = ['TestServer 1', 'TestServer 2'];

  username: string = '';

  showDetails: boolean = false;
  btnClicks = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is' + this.serverName;
  }

  onClickButton() {
    this.whatHappens = 'Oops! Not today! 🤪';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onDisplayDetails(event: Event) {
    this.showDetails = true;
    this.btnClicks.push(event.timeStamp);
    // console.log(event);
  }
}
