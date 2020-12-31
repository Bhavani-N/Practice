import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-date-viewer',
  templateUrl: './date-viewer.component.html',
  styleUrls: ['./date-viewer.component.css']
})
export class DateViewerComponent implements OnInit {
  today: Date = new Date();
  @Input() parentCount:number;
  @Output() valueChange = new EventEmitter();
  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  valueChanged() {
    this.counter += 1;
    this.valueChange.emit(this.counter);
  }

}
