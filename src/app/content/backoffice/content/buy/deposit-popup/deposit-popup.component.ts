import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-deposit-popup',
  templateUrl: './deposit-popup.component.html',
  styleUrls: ['./deposit-popup.component.sass']
})
export class DepositPopupComponent {
  public address;

  public constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  public ngOnInit() {
    this.address = this.data.address;
  }
}
