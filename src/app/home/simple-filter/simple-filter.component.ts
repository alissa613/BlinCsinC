import { Component } from '@angular/core'

@Component({
  selector: 'app-filter',
  template: `
    <input [value]="name" (input)="name = $event.target.value" />
    <div>{{ name | uppercase }}</div>
  `
})
export class SimpleFilterComponent {
  name = ''
}
