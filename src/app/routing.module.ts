import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {TodoEditComponent} from "./components/todo-edit/todo-edit.component";
import {NewTodoComponent} from "./components/new-todo/new-todo.component";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'new-todo', component: NewTodoComponent},
  {path: 'todo/:id', component: TodoEditComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)

  ],
  exports: [RouterModule]
})
export class RoutingModule {
}