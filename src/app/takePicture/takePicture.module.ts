import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { takePictureComponent } from './takePicture.component';
import { AngularService } from '../common/angular.service';
import { ReactiveFormsModule } from '@angular/forms';

export * from './takePicture.component';
export * from '../common/angular.service';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  exports: [takePictureComponent],
  providers: [AngularService],
  declarations: [takePictureComponent]
})
export class TakePictureModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TakePictureModule,
      providers: [AngularService]
    };
  }
}
