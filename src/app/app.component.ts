import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogsComponent} from "./shared/dialogs/dialogs.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Booklog';
  constructor(
      public dialog: MatDialog
  ) { }

}
