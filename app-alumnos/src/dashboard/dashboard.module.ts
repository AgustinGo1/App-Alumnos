import { SidebarModule } from './sidebar/sidebar.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ToolbarModule } from './toolbar/toolbar.module';



@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SidebarModule,
    ToolbarModule
  ]
})
export class DashboardModule { }
