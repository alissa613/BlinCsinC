import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { newUserComponent } from './newUser.component';
import { AngularService } from '../common/angular.service';
import { ReactiveFormsModule } from '@angular/forms';

export * from './newUser.component';
export * from '../common/angular.service';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  exports: [newUserComponent],
  providers: [AngularService],
  declarations: [newUserComponent]
})
export class NewUserModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NewUserModule,
      providers: [AngularService]
    };
  }
}
