import { Component } from '@angular/core';

@Component({
  selector: 'app-buy-instruction',
  templateUrl: './buy-instruction.component.html',
  styleUrls: ['./buy-instruction.component.sass']
})
export class BuyInstructionComponent {
  public byInstruction = [
    { text: 'Deposit your BTC, ETH or XMR to your wallet before the ICO round.' },
    {
      text: `Enter the CSTT amount to buy (make sure your Buying Limit
      is within the min and max limits set for the current ICO round).`},
    { text: 'Select your Currency (BTC, ETH or XMR).' },
    { text: 'Make sure you have enough BTC, ETH or XMR to cover the Total Amount to be paid.' },
    { text: 'Wait for the Countdown to hit zero.' },
    { text: 'CLICK TO PURCHASE.' },
    { text: 'You are now a proud owner of Crest Token!' }
  ];
}
