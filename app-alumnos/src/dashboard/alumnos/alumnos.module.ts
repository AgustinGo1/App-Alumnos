import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlumnosComponent } from './alumnos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';





@NgModule({
  declarations: [AlumnosComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [AlumnosComponent]
})
export class AlumnosModule { }
