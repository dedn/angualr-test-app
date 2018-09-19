import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {TodoEditComponent} from './components/todo-edit/todo-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {RoutingModule} from "./routing.module";
import {NewTodoComponent} from './components/new-todo/new-todo.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {NgxSpinnerModule} from "ngx-spinner";
import { LoginComponent } from './components/login/login.component';
import {MySlicePipe} from "./pipes/myPipes.pipe";
import {JoinPipe} from "./pipes/join.pipe";
import { BgDirective } from './directives/bg.directive';
import { MyIfDirective } from './directives/my-if.directive';
import { TestcompComponent } from './components/testcomp/testcomp.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NotFoundComponent,
    TodoEditComponent,
    NewTodoComponent,
    LoginComponent,
      MySlicePipe,
      JoinPipe,
      BgDirective,
      MyIfDirective,
      TestcompComponent,


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
    NgxSpinnerModule,
      ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
