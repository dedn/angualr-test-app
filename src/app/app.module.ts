import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {TodoEditComponent} from './components/todo-edit/todo-edit.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {RoutingModule} from "./routing.module";
import {NewTodoComponent} from './components/new-todo/new-todo.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {NgxSpinnerModule} from "ngx-spinner";
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NotFoundComponent,
    TodoEditComponent,
    NewTodoComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    BrowserModule,
    RouterModule,
    RoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
