import { MatButtonModule } from '@angular/material/button';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SignupRoutingModule,
    MatButtonModule
  ]
})
export class SignupModule { }
