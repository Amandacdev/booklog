import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

import {MatBadgeModule} from '@angular/material/badge';
import {BookModule} from "./book/book.module";
import {MatChipsModule} from '@angular/material/chips';
import{AppRoutingModule} from "./app-routing.module";
import {MenuComponent} from "./layout/menu/menu.component";
import {MatMenuModule} from "@angular/material/menu";
import {FlexLayoutModule} from "@angular/flex-layout";
import {HttpClientModule} from "@angular/common/http";
import {MatDialogModule} from '@angular/material/dialog';
import { DialogInfoComponent } from './shared/dialogs/dialog-info/dialog-info.component';
import { DialogEditComponent } from './shared/dialogs/dialog-edit/dialog-edit.component';
import {FirestoreModule} from "./shared/firestore/firestore.module";
import {MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DialogInfoComponent,
    DialogEditComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatBadgeModule,
        BookModule,
        AppRoutingModule,
        MatChipsModule,
        MatMenuModule,
        FlexLayoutModule,
        HttpClientModule,
        MatDialogModule,
        FirestoreModule,
        MatSnackBarModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
