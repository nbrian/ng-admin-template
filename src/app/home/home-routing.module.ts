import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../features/dashboard/dashboard.component';
import { DocumentsComponent } from '../features/documents/documents.component';
import { SomeModuleComponent } from '../features/some-module/some-module.component';
import { UsersComponent } from '../admin/users/users.component';
import { RolesComponent } from '../admin/roles/roles.component';
import { SampleComponent } from '../features/sample/sample.component';
import { DispatchComponent } from '../features/dispatch/dispatch.component';


const routes: Routes = [
  { path: 'dispatch', component: DispatchComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
