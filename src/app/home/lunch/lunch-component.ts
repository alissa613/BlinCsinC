import { Component } from '@angular/core'

@Component({
  selector: 'lunch-component',
  templateUrl: 'lunch.html',
  styleUrls: ['lunch.scss']
})
export class LunchComponent {
  selected = 'current'
}
