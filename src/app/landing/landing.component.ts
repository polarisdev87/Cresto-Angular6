import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { SetReferalLink } from "../store/actions/";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass']
})
export class LandingComponent implements OnInit {
  constructor(
    private _activateroute: ActivatedRoute,
    private _store: Store<StoreStates>
  ) {}
  ngOnInit() {
    const referralLink: string = this._activateroute.snapshot.queryParams['ref'] || '';
    this._store.dispatch(new SetReferalLink(referralLink));

    const el1 = document.createElement('script');
    const el2 = document.createElement('script');
    const el3 = document.createElement('script');
    el1.src = 'assets/js/jquery.bundle.js';
    el1.onload = () => {
      el2.src = 'assets/js/flipclock.min.js';
      el3.src = 'assets/js/custom.js';
      document.body.appendChild(el2);
      document.body.appendChild(el3);
    };
    document.body.appendChild(el1);
  }
}
