import {Component, OnInit} from '@angular/core';
import {Todo} from "../../models/Todo";
import {TodoService} from "../../services/todo.services";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})

export class TodoEditComponent implements OnInit {
  todo: Todo;
  todoId: string;
  isReadOnly = true;

  constructor(
      public todoServices: TodoService,
      public activatedRoute: ActivatedRoute,
      public router: Router,
      private toaster: ToastrService,
      private spinner: NgxSpinnerService
  ) {
  }

  ngOnInit() {
    this.todoId = this.activatedRoute.snapshot.params['id']
    console.log(this.todoId)
    this.todoServices.getIdTodo(this.todoId).subscribe((response: Todo) => {
      this.todo = response;
    })
  }

  onEdit() {
    this.spinner.show();
    this.isReadOnly = false;
    const updtTodo = Object.assign({}, this.todo);

    this.todoServices.updateTodo(updtTodo).subscribe((response: Todo) => {
      this.router.navigate(['/'])
    }, err => {
      this.spinner.hide();
      this.toaster.error(err.message, 'error')
    }, () => {
      this.spinner.hide();
      this.toaster.success('editing succeeded')
    })
  }
}
