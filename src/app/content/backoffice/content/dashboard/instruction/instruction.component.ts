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
      text: 'Price is $0.25 per token. This will allow our early supporters to partake at the lowest price possible. 100% of raised fund will go towards promoting the ICO and kick-off full platform development.'
    },
    {
      label: 'Main Sale ICO',
      text: 'Tokens will be sold in 8 rounds of 800,000 tokens per round. Price will start at $0.30 and increase by $0.20 per round with the last round price of $1.70. We anticipate our platform to grow to over 250,000 members within the first 90 days. Don’t MISS the Opportunity to get CSTT first!'
    }
  ];
}
