import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../features/dashboard/dashboard.component';
import { DocumentsComponent } from '../features/documents/documents.component';
import { SomeModuleComponent } from '../features/some-module/some-module.component';
import { UsersComponent } from '../admin/users/users.component';
import { RolesComponent } from '../admin/roles/roles.component';
import { SampleComponent } from '../features/sample/sample.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'users', component: UsersComponent },
  { path: 'roles', component: RolesComponent },
  { path: 'documents', component: DocumentsComponent, children: [
    { path: 'certifications', component: DocumentsComponent },
    { path: 'clearances', component: DocumentsComponent },
    { path: 'permits', component: DocumentsComponent }
  ] },
  { path: 'some-module', component: SomeModuleComponent },
  { path: 'sample', component: SampleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
