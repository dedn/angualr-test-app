import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Todo} from "../../models/Todo";
import {TodoService} from "../../services/todo.services";
import {NgxSpinnerService} from "ngx-spinner";
import {ToastrService} from "ngx-toastr";
import {TestcompComponent} from "../testcomp/testcomp.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  todos: Todo[] =[];

  testContent = 'contentntest333'

  testIf = false;

  testPipe =['test1', 'test2']

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

  @ViewChild(TestcompComponent)
  private counterComponent: TestcompComponent;

  increment() { this.counterComponent.increment(); }
  decrement() { this.counterComponent.decrement(); }

  @ViewChild("nameText")
  nameParagraph: ElementRef;
  // private renderer: Renderer2;

  name: string = "Tom";

  change() {
    if(this.nameParagraph.nativeElement.classList == 'testClass') {
      console.log('true'   );
    }  else  {
      console.log('false'   );
    }


    this.nameParagraph.nativeElement.textContent = "hell";

    // this.renderer.setStyle(this.nameParagraph.nativeElement, 'background' , 'red')
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
