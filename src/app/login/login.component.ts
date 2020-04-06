import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularService } from '../angular.service';
import { Router } from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] 
}) 
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  driver: any;
  results: any;

  constructor(private fb: FormBuilder, private neo4j: AngularService, private router: Router) {}

  ngOnInit() {
    this.createForms();
    this.connect()
  }

  createForms() {
    this.loginForm = this.fb.group({
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
          console.log(driver)
          console.log(`Successfully connected to ${this.loginForm.value.url}`);
        }
      });
  }

  disconnect() {
    this.neo4j.disconnect();
    console.log("disconnected")
  }

  LogIn(){
    const formModel = this.loginForm.value;
    const username = formModel.username;
    const password = formModel.password; 

    const query = 'MATCH (l:User) WHERE l.username= "'+username +'" AND l.password="'+password+'" return l'

    this.neo4j.run(query).then(res => {
      this.results = res
      console.log(res);
      if (this.results.length == 0){
        console.log("Incorrect username or password")
        
      }
      else{
        console.log("Correct username and password")
        this.router.navigate(['/main'])
      }
    });
  }

}
