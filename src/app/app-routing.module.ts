import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule' // Lazy-loaded route
  },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'register', loadChildren: './registration/registration.module#RegistrationModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
