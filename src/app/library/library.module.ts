import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { libraryComponent } from './library.component';
import { AngularService } from '../common/angular.service';
import { ReactiveFormsModule } from '@angular/forms';

export * from './library.component';
export * from '../common/angular.service';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  exports: [libraryComponent],
  providers: [AngularService],
  declarations: [libraryComponent]
})
export class LibraryModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LibraryModule,
      providers: [AngularService]
    };
  }
}
