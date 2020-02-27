import { Component, OnInit } from '@angular/core'
import { Injectable } from '@angular/core'

@Component({
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
@Injectable()
export class HomeComponent implements OnInit {
  testVar: string

  ngOnInit() {
    this.testVar = 'test'
  }
}
