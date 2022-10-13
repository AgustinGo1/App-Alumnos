import { AlumnosComponent } from './alumnos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';




@NgModule({
  declarations: [AlumnosComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule
  ],
  exports: [AlumnosComponent]
})
export class AlumnosModule { }
