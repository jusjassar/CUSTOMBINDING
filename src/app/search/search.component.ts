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
  @Output() searchStrToParent: EventEmitter<string> = new EventEmitter
  searchedEntered(searchStr:Event){
    // console.log((<HTMLInputElement>searchStr.target).value)
    this.searchStrToParent.emit(((<HTMLInputElement>searchStr.target).value))
  }

}
