import { Component, OnInit } from '@angular/core'

@Component({
  templateUrl: './profile.html',
  styleUrls: ['./profile.scss']
})
export class ProfileComponent {
  initDisplay: string
  hide = true
  ngOnInit() {
    this.initDisplay = 'testing the login page with variables'
  }
}