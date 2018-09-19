import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testcomp',
  templateUrl: './testcomp.component.html',
  styleUrls: ['./testcomp.component.css']
})
export class TestcompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  counter: number = 0;
  increment() { this.counter++; }
  decrement() { this.counter--; }

}
