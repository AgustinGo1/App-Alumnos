import { ToolbarRoutingModule } from './toolbar-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';



@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    ToolbarRoutingModule
  ],
  exports: [ToolbarComponent]
})
export class ToolbarModule { }
