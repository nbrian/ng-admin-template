import { NgModule } from '@angular/core';
import { MaterialModule, FaIconsModule } from '../shared/libraries/libraries';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';

@NgModule({
  declarations: [
    UsersComponent,
    RolesComponent
  ],
  imports: [
    MaterialModule,
    FaIconsModule
  ],
  exports: [
    UsersComponent,
    RolesComponent,
  ],
  entryComponents: []
})
export class AdminModule {}
