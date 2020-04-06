import { Component } from '@angular/core';
import { GlobalConstants } from './common/global-constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  id : number;
  noId: boolean;

  constructor(private router: Router){}

  ngAfterContentChecked(){
    this.id = GlobalConstants.id;
    if(this.id == 0){
      this.noId = false
      if((window.location.href != 'http://localhost:4200/login') && (window.location.href != 'http://localhost:4200/newUser')){
        this.router.navigate(['/login'])
      }
    }
    else{
      this.noId = true
    }  
  }

  logOut(){
    GlobalConstants.id = 0;
  }
  
}
