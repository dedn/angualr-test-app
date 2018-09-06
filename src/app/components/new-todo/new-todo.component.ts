import {Component, OnInit} from '@angular/core';
import {TodoService} from "../../services/todo.services";
import {Todo} from "../../models/Todo";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})

export class NewTodoComponent implements OnInit {
  constructor(
      public todoServices: TodoService,
      public router: Router,
      private toaster: ToastrService,
      private spinner: NgxSpinnerService
  ) {
  }

  ngOnInit() {
  }

  formData: Todo = {
    title: '',
    completed: false
  };

  onAdd() {
    this.spinner.show();
    const newTodo = Object.assign({}, this.formData);
    this.todoServices.addTodo(newTodo).subscribe((data: Todo) => {
        }, (error) => {
          this.spinner.hide();
          this.toaster.error(error.message, 'error')
        }, () => {

          this.spinner.hide();
          this.toaster.success('add completed successfully')
          this.router.navigate(['/'])
        }
    )
  }
}
