import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false
  serverCreationStatus = 'No Server was created!';
  serverName = 'Test Server';
  userName = 'Default UName';
  allowResetUName = 'false';
  isServerCreated = false;
  servers = ['TestServer', 'TestServer2'];
  displaySecretDetails = true;
  count = 0;
  clickCount = [0];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000);


  }

  ngOnInit(): void {
  }

  onCreatingServer() {
    this.isServerCreated = true;
    this.servers.push(this.serverName);
    return this.serverCreationStatus = 'Server was created! and Name is: ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    return this.serverName = (<HTMLInputElement>event.target).value;

  }

  onResetUserName() {
    return this.userName = '';
  }

  onToggleDetails() {
    this.count ++;
    this.clickCount.push(this.count);
    this.displaySecretDetails = this.displaySecretDetails == true ? false : true;
  }

}
