import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-referrals-component',
  templateUrl: './referrals-component.component.html',
  styleUrls: ['./referrals-component.component.sass']
})
export class ReferralsComponentComponent implements OnInit {

  @Input()
  public referrals;

  public constructor() { }

  public ngOnInit() {
  }

}
