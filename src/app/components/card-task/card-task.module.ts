import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTaskComponent } from './card-task.component';



@NgModule({
  declarations: [CardTaskComponent],
  exports: [CardTaskComponent],
  imports: [
    CommonModule
  ]
})
export class CardTaskModule { }
