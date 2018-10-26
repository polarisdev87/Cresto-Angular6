import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from '../../shared/services/localStorage.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass']
})
export class LandingComponent implements OnInit {

  public constructor(

    private _router: Router,
    private _activateroute: ActivatedRoute,
    private _localStorageService: LocalStorageService,
  ) {
  }

  public ngOnInit() {
    const referralHash: string = this._activateroute.snapshot.queryParams['ref'];
    const referralMedia: string = this._activateroute.snapshot.queryParams['subid'];
    const clickId: string = this._activateroute.snapshot.queryParams['click_id'];
    const esubId: string = this._activateroute.snapshot.queryParams['esub'];

    // Determine if visiting /pre-ico page
    const url = this._router.url;
    const isPreico = url.match('/pre-ico') ? true : false;

    if (referralHash) {
      this._localStorageService.setItem('referralHash', referralHash);

      // TODO should changed with
      // this._store.dispatch(new SetReferalLink(referralHash));
    }
    if (referralMedia) {
      this._localStorageService.setItem('referralMedia', referralMedia);
    }

    if (clickId) {
      this._localStorageService.setItem('clickId', clickId);
      this._localStorageService.setItem('signup_callback', 1);
    }

    if (esubId) {
      this._localStorageService.setItem('esubId', esubId);
    }

    if (isPreico) {
      const transactionId: string = this._activateroute.snapshot.queryParams['transaction_id'];
      if (transactionId) {
        this._localStorageService.setItem('transId', transactionId);
      }
      const pixelScript = document.createElement('script');
      pixelScript.type = 'text/javascript';
      pixelScript.text = `
        (function(d, a) {
          var h = d.getElementsByTagName("head")[0], p = d.location.protocol, s;
          wl_ef_uid = a;
          s = d.createElement("script");
          s.type = "text/javascript";
          s.charset = "utf-8";
          s.async = true;
          s.defer = true;
          s.src = "//app.wishloop.com/js/ef_embed.min.js";
          h.appendChild(s);
        })(document, '23973');
      `;
      document.body.appendChild(pixelScript);

      // Pixel test for bitcoinben2020
      if (referralHash === '8io080ru') {
        const imgPxl = document.createElement('img');
        imgPxl.src = 'https://secure.adnxs.com/px?id=1046336&seg=15157291&t=2';
        imgPxl.width = 1;
        imgPxl.height = 1;
        document.body.appendChild(imgPxl);
      }
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
