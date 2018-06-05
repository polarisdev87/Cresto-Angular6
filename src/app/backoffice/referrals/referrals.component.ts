import { Component } from '@angular/core';

@Component({
  selector: 'app-referrals',
  templateUrl: './referrals.component.html',
  styleUrls: ['./referrals.component.css']
})
export class ReferralsComponent {
  users = [];
  unauthorized = false;
  servererror = false;
}
