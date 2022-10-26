import { WelcomeComponent } from './welcome/welcome.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

export const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'alumnos', component: AlumnosComponent}
];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule],
// })
// export class DashboardRoutingModule {}
