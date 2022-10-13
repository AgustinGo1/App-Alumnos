import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import {MatExpansionModule} from '@angular/material/expansion';



@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    MatExpansionModule
  ],
  exports: [SidebarComponent]
})
export class SidebarModule { }
