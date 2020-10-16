import { Component, OnInit } from '@angular/core';
import { ListItem } from './list.interface';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {


  lists: ListItem[] = [{
    id: '11234124',
    title: 'teste1',
    description: 'description1',
    isArchived: false
  },
  {
    id: '123dwq423',
    title: 'teste2',
    description: 'description2',
    isArchived: false
  },
  {
    id: '123dwq473',
    title: 'teste3',
    description: 'description3',
    isArchived: false
  },
  {
    id: '12321ewd3',
    title: 'teste4',
    description: 'description4',
    isArchived: false
  }];

  constructor() { }

  showForm = false;

  ngOnInit(): void {
  }

  cancel(): void {
    this.showForm = false;
  }

  save(data): void {
    this.lists.push({
      id: this.generateGuid(),
      title: data.title,
      description: data.description,
      isArchived: false
    });
    this.showForm = false;
  }

  onDelete(listId: string): void {
    this.lists = this.lists.filter(list => {
      return list.id !== listId;
    });
  }

  onArchived(listId: string): void {
    this.lists.map(list => {

    });
  }

  onEdit(list: ListItem): void {

  }


  generateGuid(): string {
    let result, i, j;
    result = '';
    for(j=0; j<32; j++) {
      if( j == 8 || j == 12 || j == 16 || j == 20)
        result = result + '-';
      i = Math.floor(Math.random()*16).toString(16).toUpperCase();
      result = result + i;
    }
    return result;
  }

}
