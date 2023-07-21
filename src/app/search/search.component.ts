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
@Output() searchTextToParentEmitter:EventEmitter<string> = new EventEmitter;
  searchEnteredFunc(searchText:Event){
    this.searchTextToParentEmitter.emit((<HTMLInputElement>searchText.target).value)
    // console.log((<HTMLInputElement>searchText.target).value)
  }
}
