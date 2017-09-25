import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-my-counter',
  template: `
    <div>
    <p> My Counter </p>
    <button (click)="incrementCounter()"> increment </button>
    </div>
  `,
  styles: ['div {border: solid 1px red; float:left; padding: 5px; margin: 0 10px 0 0;}'],
  // providers: [CounterService]
})

export class MyCounterComponent implements OnInit {
  constructor(private theCounter: CounterService) {}

  ngOnInit() {}

  incrementCounter() {
    this.theCounter.increment();
  }
}