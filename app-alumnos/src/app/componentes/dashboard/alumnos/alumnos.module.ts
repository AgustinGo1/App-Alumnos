import { MaterialDesignModule } from './../../../material-design.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlumnosComponent } from './alumnos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';





@NgModule({
  declarations: [AlumnosComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialDesignModule

  ],
  exports: [AlumnosComponent]
})
export class AlumnosModule { }
