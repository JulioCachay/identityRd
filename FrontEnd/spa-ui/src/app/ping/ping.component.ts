import { Component } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-ping',
  templateUrl: './ping.component.html',
  styleUrls: ['./ping.component.scss']
})
export class PingComponent {
  constructor(
    private snackBar : MatSnackBar,
    private http : HttpClient
  ) {
  }

  ping():void
  {
    var ep = "https://localhost:7153/api/v1/ping";

    this.http.get<Pong>(ep)
      .subscribe(r=>{
        this.snackBar.open(r.response, undefined,{
          duration:1000
        });
      })

  }
}

interface Pong
{
  response : string;
}
