import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularService } from '../common/angular.service';

@Component({
  selector: 'takePicture',
  templateUrl: './takePicture.component.html',
  styleUrls: ['./takePicture.component.scss'] 
}) 
export class takePictureComponent implements OnInit {
  main: FormGroup;
  driver: any;
  results: any;

  constructor(private fb: FormBuilder, private neo4j: AngularService) {}

  ngOnInit() {
    this.createForms();
    this.connect()
  }

  createForms() {
    this.main = this.fb.group({
      firstName: '',
      lastName:'',
      username: '',
      password: ''
    });
  }

  connect() {
    this.neo4j
      .connect(
        'http://localhost:7474',
        'neo4j',
        'BlinCsinC123',
        true
      )
      .then(driver => {
        if (driver) {
          console.log(`Successfully connected`);
        }
      });
  }

  disconnect() {
    this.neo4j.disconnect();
    console.log("disconnected")
  }

  createUser(){
    const formModel = this.main.value;
    const firstName = formModel.firstName;
    const lastName = formModel.lastName;
    const username = formModel.username;
    const password = formModel.password; 

    const query = 'CREATE (p:User {firstName: "' + firstName + '", lastName: "' + lastName + '", username: "'+ username +'", password: "'+ password +'"})'

    console.log(query)
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

  newLogin() {
    
  }

}
