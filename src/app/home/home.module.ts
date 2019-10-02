import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FeaturesModule } from '../features/features.module';
import { HeaderComponent } from './header/header.component';
import { MaterialModule, FaIconsModule } from '../shared/libraries/libraries';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home.component';
import { SidebarItemComponent } from './sidebar/sidebar-item/sidebar-item.component';
import { AdminModule } from '../admin/admin.module';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    SidebarItemComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FaIconsModule,
    FeaturesModule,
    AdminModule,
    HomeRoutingModule
  ],
  exports: [
    FeaturesModule,
    AdminModule,
    HeaderComponent,
    SidebarComponent,
    SidebarItemComponent,
    HomeComponent
  ]
})
export class HomeModule { }
