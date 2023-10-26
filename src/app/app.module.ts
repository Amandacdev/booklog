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
import {AtividadeModule} from "./atividade/atividade.module";
import {MatChipsModule} from '@angular/material/chips';
import{AppRoutingModule} from "./app-routing.module";
import {MenuComponent} from "./layout/menu/menu.component";
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
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
    AtividadeModule,
    AppRoutingModule,
    MatChipsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
