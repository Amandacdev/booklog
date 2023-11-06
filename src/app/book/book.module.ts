import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookRegisterComponent } from './book-register/book-register.component';
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import { BookListComponent } from './book-list/book-list.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatInputModule} from "@angular/material/input";

import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatChipsModule} from "@angular/material/chips";
import {MatTooltipModule} from "@angular/material/tooltip";
import {FlexLayoutModule} from "@angular/flex-layout";


@NgModule({
  declarations: [BookRegisterComponent, BookListComponent],
  exports: [
    BookRegisterComponent,
    BookListComponent
  ],
    imports: [
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatBadgeModule,
        MatIconModule,
        MatDividerModule,
        MatChipsModule,
        MatTooltipModule,
        FlexLayoutModule
    ]
})
export class BookModule { }
