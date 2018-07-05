import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-backoffice-footer',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './backoffice-footer.component.html',
  styleUrls: ['./backoffice-footer.component.sass']
})
export class BackofficeFooterComponent {
  public buttonStateHelp = {
    name: 'Help',
    class: 'emptyGreen'
  }
}
