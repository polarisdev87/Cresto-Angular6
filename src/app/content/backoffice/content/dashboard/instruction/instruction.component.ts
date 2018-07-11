import { Component } from '@angular/core';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.sass']
})
export class InstructionComponent {
  public welcomeList = [
    {
      label: 'Step 1',
      text: 'Deposit your Bitcoin (BTC) or Ethereum (ETH) into your wallet address provided under the "WALLET" section.'
    },
    {
      label: 'Step 2',
      text: 'Once the ICO is live, enter the amount of CSTT tokens you wish to purchase, select the currency ' +
      '(BTC or ETH) you wish to use and click the “CLICK TO PURCHASE” button located on the "BUY TOKENS" section.'
    },
    {
      label: 'Pre-Sale ICO',
      text: 'Price is $0.25 per token, with min/max token purchase of 100/10,000 CSTT. This will allow our early ' +
      'supporters to partake at the lowest price possible. 100% of raised fund will go towards promoting the ICO ' +
      'and kick-off full platform development.'
    },
    {
      label: 'Main Sale ICO',
      text: 'Tokens will be sold in 16 rounds of 400,000 tokens per round. Price will start at $0.35 and increase by ' +
      '$0.10 per round with the last round price of $1.85. We anticipate our platform to grow to over 250,000 ' +
      'members within the first 90 days after ICO with a potential CSTT value beyond $15. Don’t MISS the Opportunity ' +
      'to get CSTT first!'
    }
  ];
}
