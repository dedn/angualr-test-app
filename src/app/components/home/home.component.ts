import {Component, OnInit} from '@angular/core';
import {Todo} from "../../models/Todo";
import {TodoService} from "../../services/todo.services";
import {NgxSpinnerService} from "ngx-spinner";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  todos: Todo[];

  constructor(
      private todoServices: TodoService,
      private toaster: ToastrService,
      private spinner: NgxSpinnerService
  ) {
  }

  ngOnInit() {
    this.todoServices.getTodos().subscribe((response: Todo[]) => {
      this.todos = response;
    })
  }

  onDelete(id: number) {
    this.spinner.show();
    this.todoServices.deleteTodo(id).subscribe((data: Object) => {
          this.todos = this.todos.filter(todo => todo.id != id);
        }, (error) => {
          this.toaster.error(error.message, 'error')
        }, () => {
          this.spinner.hide();
          this.toaster.success('Todo deleted success')
        },
    )
  }
}
