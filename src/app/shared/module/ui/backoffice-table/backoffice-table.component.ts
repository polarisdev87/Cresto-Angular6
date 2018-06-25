import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-backoffice-table',
  templateUrl: './backoffice-table.component.html',
  styleUrls: ['./backoffice-table.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackofficeTableComponent {
  @Input() dashboardTableHead;
  @Input() rounds;
  @Input() columns;
}
