import {Component, Inject} from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent {
  constructor(
    public auth: AuthService,
    @Inject(DOCUMENT) public document: Document) {}

  login():void
  {
    this.auth.loginWithRedirect();
  }
  logout():void
  {
    this.auth.logout({ logoutParams: { returnTo: 'http://localhost:4200' } })
      .subscribe();
  }
}
