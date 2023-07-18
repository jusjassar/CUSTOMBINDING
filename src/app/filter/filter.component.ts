import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
this.radioSelectionToParent.emit(this.coursesSelected)
  }
  @Input('total') all: number = 19;
  @Input() free: number = 9;
  @Input() premium: number = 10;
  coursesSelected: string = 'All';
  @Output() radioSelectionToParent: EventEmitter<string> = new EventEmitter;

  radioButtonSelected(radioSelection: string) {
    console.log(radioSelection)
    this.radioSelectionToParent.emit(radioSelection)
  }
}

