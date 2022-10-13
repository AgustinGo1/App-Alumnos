import { SidebarsRoutingModule } from './sidebar-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';



@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    SidebarsRoutingModule
  ],
  exports: [SidebarComponent]
})
export class SidebarModule { }
