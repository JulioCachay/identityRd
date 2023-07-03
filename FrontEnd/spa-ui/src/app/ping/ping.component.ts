import { Component } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-ping',
  templateUrl: './ping.component.html',
  styleUrls: ['./ping.component.scss']
})
export class PingComponent {
  constructor(
    private snackBar : MatSnackBar
  ) {
  }

  ping():void
  {
    this.snackBar.open("Pong", undefined,{
      duration:1000
    });
  }
}
