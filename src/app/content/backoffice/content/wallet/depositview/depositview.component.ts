import {Component, ViewEncapsulation, Input} from '@angular/core';

@Component({
  selector: 'app-depositview',
  templateUrl: './depositview.component.html',
  styleUrls: ['./depositview.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class DepositviewComponent {

  @Input()
  public coin;

  public confirmButton = true;

  public depositBtn = {
    name: 'Copy address',
    class: 'emptyGreen'
  };


  public confirmSelected() {
    this.confirmButton = !this.confirmButton;
  }

}
