import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-referral-link',
  templateUrl: './referral-link.component.html',
  styleUrls: ['./referral-link.component.sass']
})
export class ReferralLinkComponent {
  public copyButton = {
    name: 'Copy address',
    class: 'emptyGreen'
  };
  @Input()
  public referralLink;

}
