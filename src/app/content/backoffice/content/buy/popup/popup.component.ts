import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.sass']
})
export class PopupComponent {


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router
  ) { }

  // public depositButton = {
  //   name: 'Deposit BTC',
  //   class: 'emptyGreen',
  // };

public toWallet(): void {
  this.router.navigate(['backoffice/wallet']);
  }

}
