import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'curso-angular';

  onDelete(): void {
    console.log('delete clicked');
  }

  onEdit(): void {
    console.log('edit clicked');
  }

  onArchived(): void {
    console.log('archived clicked');
  }
}
