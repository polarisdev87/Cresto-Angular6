import { Component } from '@angular/core';

@Component({
  selector: 'app-referraldetails',
  templateUrl: './referraldetails.component.html',
  styleUrls: ['./referraldetails.component.css']
})
export class ReferralDetailsComponent {
  isLoaded = false;
  unauthorized = false;
  servererror = false;
}
