import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../../shared/services/localStorage.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass']
})
export class LandingComponent implements OnInit {
  public constructor(
    private _activateroute: ActivatedRoute,
    private _localStorageService: LocalStorageService,
  ) {
  }

  public ngOnInit() {
    const referralHash: string = this._activateroute.snapshot.params['referralHash'];
    if (referralHash) {
      this._localStorageService.setItem('referralHash', referralHash);
      // TODO should changed with
      // this._store.dispatch(new SetReferalLink(referralHash));
    }

    const el1 = document.createElement('script');
    const el2 = document.createElement('script');
    const el3 = document.createElement('script');
    const el4 = document.createElement('script');
    el1.src = 'assets/js/jquery.bundle.js';
    el1.onload = () => {
      el2.src = 'assets/js/flipclock.min.js';
      el3.src = 'assets/js/particles.js';
      el4.src = 'assets/js/custom.js';
      document.body.appendChild(el2);
      document.body.appendChild(el3);
      document.body.appendChild(el4);
    };
    document.body.appendChild(el1);


    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      const el = document.getElementById('to-top');
      if (el === null) {
        return;
      }
      if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        el.style.display = 'flex';
        return;
      }
      el.style.display = 'none';
    }
  }

  public scrollTotop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}