import { Component } from '@angular/core';

@Component({
  selector: 'app-myreferrals',
  templateUrl: './myreferrals.component.html',
  styleUrls: ['./myreferrals.component.css']
})
export class MyreferralsComponent {
  isLoaded = false;
  username;
  referrals =[];
}
