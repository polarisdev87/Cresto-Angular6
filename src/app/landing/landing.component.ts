import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { SetReferalLink } from "../store/actions/";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.bundle.css', './landing.component.css']
})
export class LandingComponent implements OnInit {
  constructor(
    private _activateroute: ActivatedRoute,
    private _store: Store<StoreStates>
  ) {}
  ngOnInit() {
    const referralHash: string = this._activateroute.snapshot.params['referralHash'] || '';
    this._store.dispatch(new SetReferalLink(referralHash));

    const el1 = document.createElement('script');
    const el2 = document.createElement('script');
    el1.src = 'assets/js/jquery.bundle.js';
    el1.onload = () => {
      el2.src = 'assets/js/script.js';
      document.body.appendChild(el2);
    };
    document.body.appendChild(el1);
  }
}
