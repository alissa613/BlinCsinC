import { Component } from '@angular/core'

@Component({
  selector: 'app-contact-list',
  template: `
    <mat-card class="contact-card">
      <div *ngFor="let contact of contacts">{{ contact.id }} - {{ contact.name }}</div>
    </mat-card>
  `,
  styles: ['.contact-card { max-width: 400px; }']
})
export class ContactListComponent {
  contacts = [{ id: 1, name: 'Jane Smith' }, { id: 2, name: 'Ted Bear' }, { id: 3, name: 'John Snow' }]
}
