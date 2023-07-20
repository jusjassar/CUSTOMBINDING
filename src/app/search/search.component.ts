import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
@Output() searchStrToParentEmitter: EventEmitter<string> = new EventEmitter;
  searchEnteredFunc(searchStr:Event){
    // console.log((<HTMLInputElement>searchStr.target).value)
    this.searchStrToParentEmitter.emit((<HTMLInputElement>searchStr.target).value)
  }
}
