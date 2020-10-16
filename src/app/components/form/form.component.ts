import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  @Input() item = { title: '', description: ''};
  @Input() title = 'Novo registro';
  @Output() onCancel = new EventEmitter();
  @Output() onSave = new EventEmitter();
  ngOnInit(): void {
  }

  save(): void {
    this.onSave.emit(this.item)
  };
  cancel(): void {
    this.onCancel.emit(null)
  };
}
