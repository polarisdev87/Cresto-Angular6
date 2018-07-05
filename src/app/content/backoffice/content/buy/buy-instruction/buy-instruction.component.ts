import { Component } from '@angular/core';

@Component({
  selector: 'app-buy-instruction',
  templateUrl: './buy-instruction.component.html',
  styleUrls: ['./buy-instruction.component.sass']
})
export class BuyInstructionComponent {
  public byInstruction = [
    {text: 'Deposit your BTC and/or ETH to your wallet before the ICO round.'},
    {text: 'Enter the CSTT amount to buy (make sure your Buying Limit is within the min and max limits set for the current ICO round).'},
    {text: 'Select your Currency (BTC or ETH).'},
    {text: 'Make sure you have enough BTC or ETH to cover the Total Amount to be paid.'},
    {text: 'Wait for the Countdown to hit zero.'},
    {text: 'CLICK TO PURCHASE.'},
    {text: 'You are now a proud owner of Crest Token!'}
  ];
}
