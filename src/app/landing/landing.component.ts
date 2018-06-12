import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { SetReferalLink } from "../store/actions/";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  constructor(
    private _activateroute: ActivatedRoute,
    private _store: Store<StoreStates>
  ) {
  }

  ngOnInit() {
    const referralLink: string = this._activateroute.snapshot.queryParams['ref'] || '';
    this._store.dispatch(new SetReferalLink(referralLink));
  }
}
