import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { CallActionComponent } from './call-action/call-action.component';
import { InstructionComponent } from './instruction/instruction.component';
import { UiModule } from '../../shared/module/ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    RouterModule.forChild([
      {path: '', component: DashboardComponent}
    ]),
  ],
  declarations: [DashboardComponent, CallActionComponent, InstructionComponent]
})
export class DashboardModule {
}
