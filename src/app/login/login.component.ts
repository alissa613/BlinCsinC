import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularService } from '../common/angular.service';
import { Router } from "@angular/router";
import { GlobalConstants } from '../common/global-constants'

declare var movePCtoRP: any;

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] 
}) 
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  driver: any;
  results: any;
  id: number;
  incorrectError: boolean;
  userError: boolean;
  passwordError: boolean;

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
        'https://hobby-jmlindhpafecgbkennlcgpel.dbs.graphenedb.com:24780/db/data/',
        'production',
        'b.6mWulGd8CK3p.tvpM1u3239zeokrM',
        true
      )
      .then(driver => {
        if (driver) {
          console.log(`Successfully connected!`);
        }
      });
  }

  lengthTest(word: any){
    if(word.length == 0 ){
      return true
    }
    else{
      return false
    }
  }

  LogIn(){
    this.incorrectError = false;
    const formModel = this.loginForm.value;
    const username = formModel.username;
    const password = formModel.password; 

    this.userError = this.lengthTest(username)
    this.passwordError = this.lengthTest(password)

    if(!this.userError && !this.passwordError){
      const query = 'MATCH (l:User) WHERE l.username= "'+username +'" AND l.password="'+password+'" return id(l)'

      this.neo4j.run(query).then(res => {
        this.results = res
        console.log(res);
        if (this.results.length == 0){
          console.log("Incorrect username or password")
          this.incorrectError = true;
        }
        else{
          console.log("Correct username and password")
          const query = 'MATCH (a:Image) RETURN a.location';

          this.neo4j.run(query).then(res => {
            this.results = res;
            console.log(res)
            var length = this.results.length;
            for(var i=0; i<length; i++){
              new movePCtoRP(res[i][0])
            }
          });

          GlobalConstants.id = res[0][0]
          console.log("Id global: " + GlobalConstants.id)
          this.router.navigate(['/main'])
        }
      });
    }
  }
}
