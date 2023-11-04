import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BookRegisterComponent} from "./book/book-register/book-register.component";
import {BookListComponent} from "./book/book-list/book-list.component";

const routes: Routes = [
  {
    path: "book-register",
    component: BookRegisterComponent
  },
  {
    path: "book-list",
    component: BookListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
