import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  @Input() placeholder = 'Buscar...';
  @Output() searchFieldClick = new EventEmitter();
  @Output() searchFieldInput = new EventEmitter();
  ngOnInit(): void {
  }

  onInput(searchText: string): void {
    this.searchFieldInput.emit(searchText);
  }

  onClick(searchText: string): void {
    this.searchFieldClick.emit(searchText);
  }
}
