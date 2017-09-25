import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-my-second-counter',
  template: `
    <div>
    <p> My Counter </p>
    <button (click)="incrementCounter()"> increment </button>
    </div>
  `,
  styles: ['div {border: solid 1px blue; float:left; padding: 5px}'],
  // providers: [CounterService]
})

export class MySecondCounterComponent implements OnInit {
  constructor(private theCounter: CounterService) {}

  ngOnInit() {}

  incrementCounter() {
    this.theCounter.increment();
  }
}