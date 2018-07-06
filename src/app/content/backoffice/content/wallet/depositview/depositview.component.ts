import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'app-depositview',
  templateUrl: './depositview.component.html',
  styleUrls: ['./depositview.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class DepositviewComponent implements OnInit {

  @Input()
  public coin;

  confirmButton: boolean = true;

  depositBtn = {
    name: 'Copy address',
    class: 'emptyGreen'
  };

  constructor() {
  }

  ngOnInit() {
  }

  confirmSelected() {
    this.confirmButton = !this.confirmButton;
  }

}
