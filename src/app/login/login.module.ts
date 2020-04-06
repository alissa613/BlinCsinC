import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { AngularService } from '../angular.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export * from './login.component';
export * from '../angular.service';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [LoginComponent],
  providers: [AngularService],
  declarations: [LoginComponent]
})
export class AngularNeo4jModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AngularNeo4jModule,
      providers: [AngularService]
    };
  }
}
