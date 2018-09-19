import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {TodoEditComponent} from "./components/todo-edit/todo-edit.component";
import {NewTodoComponent} from "./components/new-todo/new-todo.component";
import {LoginComponent} from "./components/login/login.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {path: '', component: HomeComponent , canActivate:[AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'new-todo', component: NewTodoComponent, canActivate:[AuthGuard]},
  {path: 'todo/:id', component: TodoEditComponent, canActivate:[AuthGuard]},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)

  ],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class RoutingModule {
}