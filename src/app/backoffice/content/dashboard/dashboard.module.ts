import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { CallActionComponent } from './call-action/call-action.component';
import { InstructionComponent } from './instruction/instruction.component';
import {SharedModule} from '../../shared/modules/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path: '', component: DashboardComponent}
    ]),
  ],
  declarations: [DashboardComponent, CallActionComponent, InstructionComponent]
})
export class DashboardModule {
}
