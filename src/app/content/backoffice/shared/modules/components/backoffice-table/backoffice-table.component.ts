import { ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { ScrollbarComponent } from 'ngx-scrollbar';

@Component({
  selector: 'app-backoffice-table',
  templateUrl: './backoffice-table.component.html',
  styleUrls: ['./backoffice-table.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackofficeTableComponent {
  @Input() public dashboardTableHead;
  @Input() public rounds;
  @Input() public columns;
  @Input() public scroll;
  @Input() public emptyMassege;

  @ViewChild(ScrollbarComponent) public scrollRef!: ScrollbarComponent;
}
