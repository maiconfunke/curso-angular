import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  @Input() title = 'teste';
  @Input() description = 'description';
  @Output() onEditClicked = new EventEmitter();
  @Output() onArchivedClicked = new EventEmitter();
  @Output() onDeleteClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(): void {
    this.onDeleteClicked.emit(null);
  }

  onEdit(): void {
    this.onEditClicked.emit(null);
  }

  onArchived(): void {
    this.onArchivedClicked.emit(null);
  }
}
