import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { InstructionComponent } from './instruction/instruction.component';
import { CallActionComponent } from './call-action/call-action.component';
import {UiModule} from "../../shared/module/ui/ui.module";

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    RouterModule.forChild([
      { path: '', component: DashboardComponent}
    ]),
  ],
  declarations: [DashboardComponent, InstructionComponent, CallActionComponent]
})
export class DashboardModule { }
