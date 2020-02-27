import { Component, OnInit } from '@angular/core'
import { Neo4jService } from '../neo4j.service'

@Component({
  templateUrl: './registration.html',
  styleUrls: ['./registration.scss']
})
export class RegistrationComponent {
  initDisplay: string
  hide = true

  constructor(
    private neo4jService: Neo4jService
  ) { }

  ngOnInit() {
    this.initDisplay = 'testing the login page with variables'

    this.neo4jService.query("START n=node(*) RETURN n;").then(
      response => {
        console.log(response)
      }
    )

  }
}
