import { environment } from '../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { RefferralsService } from './referrals.service';

@Component({
  selector: 'app-myreferrals',
  templateUrl: './myreferrals.component.html',
  styleUrls: ['./myreferrals.component.css'],
  providers: [RefferralsService]
})
export class MyreferralsComponent implements OnInit {
  isLoaded = false;
  username;
  referrals = [];
  referalLink;

  constructor(private _referralsService: RefferralsService) {}
  ngOnInit() {
    this._referralsService.getReferralLink().subscribe((referalLink: string) => {
      this.referalLink = `${environment.domain}/signup?referral=${referalLink}`;
    });
  }
}
