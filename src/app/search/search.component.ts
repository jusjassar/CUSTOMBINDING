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
  searchStrEntered:string='hello'
  @Output() SearchStringToParent:EventEmitter<string> = new EventEmitter;
  SearchBox(SearchString:string){
    console.log(SearchString)
    this.SearchStringToParent.emit(SearchString)
  }

}
