import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mainComponent } from './main.component';
import { AngularService } from '../common/angular.service';
import { ReactiveFormsModule } from '@angular/forms';

export * from './main.component';
export * from '../common/angular.service';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  exports: [mainComponent],
  providers: [AngularService],
  declarations: [mainComponent]
})
export class NewUserModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NewUserModule,
      providers: [AngularService]
    };
  }
}
