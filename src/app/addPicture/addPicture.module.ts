import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { addPictureComponent } from './addPicture.component';
import { AngularService } from '../common/angular.service';
import { ReactiveFormsModule } from '@angular/forms';

export * from './addPicture.component';
export * from '../common/angular.service';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  exports: [addPictureComponent],
  providers: [AngularService],
  declarations: [addPictureComponent]
})
export class AddPictureModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AddPictureModule,
      providers: [AngularService]
    };
  }
}
