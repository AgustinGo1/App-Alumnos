import { MaterialDesignModule } from './../../material-design.module';
import { RouterModule } from '@angular/router';
import { AlumnosModule } from './alumnos/alumnos.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ToolbarModule } from './toolbar/toolbar.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { routes } from './dashboard-routing.module';
import { CursosComponent } from './cursos/cursos.component';




@NgModule({
  declarations: [
    DashboardComponent,
    WelcomeComponent,
    CursosComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SidebarModule,
    ToolbarModule,
    AlumnosModule,
    MaterialDesignModule
  ]
})
export class DashboardModule { }
