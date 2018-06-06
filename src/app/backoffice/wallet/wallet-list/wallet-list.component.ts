import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-wallet-list',
  templateUrl: './wallet-list.component.html',
  styleUrls: ['./wallet-list.component.sass']
})
export class WalletListComponent {
  @Input()
  wallets;

}
