import { ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { ScrollbarComponent } from 'ngx-scrollbar';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeHtml } from '@angular/platform-browser/src/security/dom_sanitization_service';

@Component({
  selector: 'app-backoffice-table',
  templateUrl: './backoffice-table.component.html',
  styleUrls: ['./backoffice-table.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackofficeTableComponent {
  @Input() public dashboardTableHead;
  @Input() public rounds;
  @Input() public columns;
  @Input() public scroll;
  @Input() public emptyMassege;
  @Input() public extraClass = '';

  @ViewChild(ScrollbarComponent) public scrollRef!: ScrollbarComponent;

  public constructor(
    private _sanitazer: DomSanitizer
  ) {

  }

  public sanitazedHtml(html: string): SafeHtml {
    html = html || '';
    return this._sanitazer.bypassSecurityTrustHtml(html);
  }
}
