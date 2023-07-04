import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { PingComponent } from './ping/ping.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthHttpInterceptor, AuthModule} from "@auth0/auth0-angular";
import { UserDataComponent } from './user-data/user-data.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    PingComponent,
    UserDataComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule,
    HttpClientModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-8is56w4e0wopjkjp.us.auth0.com',
      clientId: 'JbswWGsEPfLq8MLpkeiZjJHg8wbb7ry6',
      authorizationParams: {
        redirect_uri: window.location.origin,
        // Request this audience at user authentication time
        audience: 'https://ping-api',

        // Request this scope at user authentication time
        scope: 'read:current_user'
      },
      // Specify configuration for the interceptor
      httpInterceptor: {
        allowedList: [
          {
            // Match any request that starts 'https://dev-8is56w4e0wopjkjp.us.auth0.com/api/v2/' (note the asterisk)
            uri: 'http://localhost:5231/api/v1/*',
            tokenOptions: {
              authorizationParams: {
                // The attached token should target this audience
                audience: 'https://ping-api',

                // The attached token should have these scopes
                scope: 'read:current_user'
              }
            }
          }
        ]
      }
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
