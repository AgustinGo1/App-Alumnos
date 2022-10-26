import { RouterModule } from '@angular/router';
import { AlumnosModule } from './alumnos/alumnos.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ToolbarModule } from './toolbar/toolbar.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { routes } from './dashboard-routing.module';




@NgModule({
  declarations: [
    DashboardComponent,
    WelcomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SidebarModule,
    ToolbarModule,
    AlumnosModule
  ]
})
export class DashboardModule { }
