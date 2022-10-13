import { AlumnosComponent } from './alumnos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [AlumnosComponent],
  imports: [
    CommonModule,
  ],
  exports: [AlumnosComponent]
})
export class AlumnosModule { }
