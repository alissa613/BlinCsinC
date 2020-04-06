import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { newUserComponent } from './newUser/newUser.component';
import { mainComponent } from './main/main.component';
import { addPictureComponent } from './addPicture/addPicture.component'
import { libraryComponent } from './library/library.component';
import { takePictureComponent } from './takePicture/takePicture.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'newUser', component: newUserComponent },
  { path: 'main', component: mainComponent },
  { path: 'addPicture', component: addPictureComponent },
  { path: 'library', component: libraryComponent },
  { path: 'takePicture', component: takePictureComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
