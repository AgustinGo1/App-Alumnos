import { DashboardComponent } from './../dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  redirectTo: '/signup',
  pathMatch: 'full',
},
{
  path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupModule),
},
{
  path: 'dashboard',
   loadChildren: () => import('../dashboard/dashboard.module').then( m => m.DashboardModule),
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
