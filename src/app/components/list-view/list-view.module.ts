import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewComponent } from './list-view.component';
import { SearchModule } from '../search/search.module';
import { CardListModule } from '../card-list/card-list.module';



@NgModule({
  declarations: [ListViewComponent],
  exports: [ListViewComponent],
  imports: [
    CommonModule,
    SearchModule,
    CardListModule
  ]
})
export class ListViewModule { }
