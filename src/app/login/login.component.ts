import { Component } from '@angular/core'

@Component({
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {
  initDisplay: string
  hide = true
  ngOnInit() {
    this.initDisplay = 'testing the login page with variables'
  }
}
