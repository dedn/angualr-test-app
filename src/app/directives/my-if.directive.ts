import {Directive, Input, OnChanges, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appMyIf]'
})
export class MyIfDirective implements OnChanges{


  constructor(

      private  templateRef: TemplateRef<any>,
      private  viewContainer: ViewContainerRef
  ) { }

  ngOnChanges() {

  }

  @Input() set appMyIf(condition) {
    if(condition) {
      this.viewContainer.createEmbeddedView(this.templateRef)
    } else  {
      this.viewContainer.clear();
    }

  }
}
