import { Component } from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent {
  constructor(public auth: AuthService) {}

  login():void
  {
    this.auth.loginWithRedirect();
  }
  logout():void
  {
    this.auth.logout();
  }
}
