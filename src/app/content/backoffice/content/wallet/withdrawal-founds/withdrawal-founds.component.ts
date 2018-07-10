import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-withdrawal-founds',
  templateUrl: './withdrawal-founds.component.html',
  styleUrls: ['./withdrawal-founds.component.sass']
})
export class WithdrawalFoundsComponent implements OnInit {
  @Input() public coin;


  public buttonStateBuy = {
    name: 'Send',
    class: 'redBig'
  };

  // in component we can get which coin we chose by input coin

  public withdrawalForm: FormGroup = new FormGroup({

    'walletAddress': new FormControl(Validators.required),
    'amount': new FormControl(Validators.required),
    '2FACode': new FormControl(Validators.required)
  });

  public constructor() {
  }

  public ngOnInit() {
  }

}
