import { Component } from '@angular/core';
import { GlobalConstants } from './common/global-constants';
import { Router } from '@angular/router';
import { libraryComponent } from './library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  id : number;
  noId: boolean;
  main= true;
  library: boolean;
  addPicture: boolean;
  takePicture: boolean;

  constructor(private router: Router){}

  ngAfterContentChecked(){
    this.id = GlobalConstants.id;
    if(this.id == -1){
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
    GlobalConstants.id = -1;
  }

  changeMain(){
    this.main = true;
    this.library = false;
    this.takePicture = false;
    this.addPicture = false;
  }

  changeLibrary(){
    this.main = false;
    this.library = true;
    this.takePicture = false;
    this.addPicture = false;
  }

  changeTakePicture(){
    this.main = false;
    this.library = false;
    this.takePicture = true;
    this.addPicture = false;
  }

  changeAddPicture(){
    this.main = false;
    this.library = false;
    this.takePicture = false;
    this.addPicture = true;
  }


  
}
