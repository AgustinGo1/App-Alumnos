import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './componentes/signup/signup.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/signup',
  pathMatch: 'full',
},
{
  path: 'signup',
  component: SignupComponent,
},
{
  path: 'dashboard',
  component: DashboardComponent,
  children: [{
    path: '',
    loadChildren: () => import('./componentes/dashboard/dashboard.module').then( m => m.DashboardModule),
  }]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
