import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularService } from '../angular.service';
import { Router } from '@angular/router';

@Component({
  selector: 'newUser',
  templateUrl: './newUser.component.html',
  styleUrls: ['./newUser.component.scss'] 
}) 
export class newUserComponent implements OnInit {
  newUser: FormGroup;
  driver: any;
  results: any;
  accountError: boolean;
  usernameError: boolean;
  firstError: boolean;
  lastError: boolean;
  userError: boolean;
  passError: boolean;

  constructor(private fb: FormBuilder, private neo4j: AngularService, private router: Router) {}

  ngOnInit() {
    this.createForms();
    this.connect()
  }

  createForms() {
    this.newUser = this.fb.group({
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

  length3Test(word: any){
    if(word.length <= 3){
      return true
    }
    else{
      return false
    }
  }

  lengthTest(word: any){
    if(word.length == 0 ){
      return true
    }
    else{
      return false
    }
  }

  async createUser(){
    const formModel = this.newUser.value;
    const firstName = formModel.firstName;
    const lastName = formModel.lastName;
    const username = formModel.username;
    const password = formModel.password; 

    this.firstError = this.lengthTest(firstName);
    this.lastError = this.lengthTest(lastName);
    this.userError = this.length3Test(username);
    this.passError = this.length3Test(password);

    if(!this.firstError && !this.lastError && !this.userError && !this.passError) {
      const query1 = 'MATCH (p: User) WHERE p.firstName = "' + firstName + '" AND p.lastName = "' + lastName + '" RETURN p'
      const query2 = 'MATCH (p: User) WHERE p.username = "' + username + '" RETURN p'

      await this.neo4j.run(query1).then(res => {
        this.results = res
        if (this.results.length == 0){
          this.accountError = false;
        }
        else{
          this.accountError = true;
        }
      });

      await this.neo4j.run(query2).then(res => {
        this.results = res
        if (this.results.length == 0){
          this.usernameError = false;
        }
        else{
          this.usernameError = true;
        }
      });

      if ((this.accountError == false ) && (this.usernameError == false)){
        const query3 = 'CREATE (p:User {firstName: "' + firstName + '", lastName: "' + lastName + '", username: "'+ username +'", password: "'+ password +'"})'

        await this.neo4j.run(query3).then(res => {
          this.results = res
        }); 

        this.router.navigate(['/main'])
        
      }
    }
  }

}
