import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularService } from '../common/angular.service';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'] 
}) 
export class mainComponent implements OnInit {
  main: FormGroup;
  driver: any;
  results: any;

  constructor(private fb: FormBuilder, private neo4j: AngularService) {}

  ngOnInit(){

  }
  
  test(){
    console.log("Test")
    const query = 'MATCH (l:User) WHERE l.username= "ajv5282" return id(l)'

    this.neo4j.run(query).then(res => {
      this.results = res
      console.log(res);
      if (this.results.length == 0){
        console.log("Incorrect username or password")
      }
      else{
        console.log("Correct username and password")
      }
    });
  }
}
