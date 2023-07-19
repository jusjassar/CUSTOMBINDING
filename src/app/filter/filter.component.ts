import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.radioButtonSelectionToParent.emit(this.radioButtonSelection)
  }
@Input() all:number=9;
@Input() Free:number=3;
@Input() Premium:number=6;
radioButtonSelection:string='All';
@Output() radioButtonSelectionToParent:EventEmitter<string> = new EventEmitter;
radioButtonSelectedFunc(radioButtonSelected:string){
  console.log(radioButtonSelected)
  this.radioButtonSelectionToParent.emit(radioButtonSelected)
}
}

