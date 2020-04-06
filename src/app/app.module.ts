import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'; 
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { newUserComponent } from './newUser/newUser.component'
import { mainComponent } from './main/main.component'
import { addPictureComponent } from './addPicture/addPicture.component'
import { libraryComponent } from './library/library.component'
import { takePictureComponent } from './takePicture/takePicture.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    newUserComponent,
    mainComponent,
    addPictureComponent,
    libraryComponent,
    takePictureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
