import { Component } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, throwError} from "rxjs";

@Component({
  selector: 'app-ping',
  templateUrl: './ping.component.html',
  styleUrls: ['./ping.component.scss']
})
export class PingComponent {
  constructor(
    private http : HttpClient
  ) {
  }

  warningVisible = false;
  warningText = "";
  pongVisible = false;
  ping():void
  {
    var ep = "http://localhost:5231/api/v1/ping";

    this.http.get<Pong>(ep)
      .subscribe(
        {
          next:r=>this.ShowPong(),
          error:e=>{
            this.ShowError(e.toString())
          }
        }
      );

  }

  private ShowPong():void
  {
    this.pongVisible = true;
    setTimeout(()=>{
      this.pongVisible = false;
    },2500);
  }
  private ShowError(errorCode:string)
  {
    this.warningText = "Error: " + errorCode;
    this.warningVisible = true;
    setTimeout(()=>{
      this.warningText = "";
      this.warningVisible = false;
    },2500);
  }
}

interface Pong
{
  response : string;
}
