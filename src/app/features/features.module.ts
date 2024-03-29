import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocumentsComponent } from './documents/documents.component';
import { SomeModuleComponent } from './some-module/some-module.component';
import { MaterialModule, FaIconsModule } from '../shared/libraries/libraries';
import { SomeModuleDetailComponent } from './some-module/some-module-detail/some-module-detail.component';
import { SampleComponent } from './sample/sample.component';
import { ConfirmationDialog, Dialog, PageContainerComponent } from '../shared/components/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const modules = [
  PageContainerComponent,
  DashboardComponent,
  DocumentsComponent,
  SomeModuleComponent,
  ConfirmationDialog,
  Dialog,
  SomeModuleDetailComponent,
  SampleComponent
];
@NgModule({
  declarations: modules,
  exports: modules,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FaIconsModule
  ],
  entryComponents: [
    ConfirmationDialog,
    Dialog,
    SomeModuleDetailComponent
  ]
})
export class FeaturesModule {}
