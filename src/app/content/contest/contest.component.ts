import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { LocalStorageService } from '../../shared/services/localStorage.service';

@Component({
  selector: 'app-contest',
  templateUrl: './contest.component.html',
  styleUrls: ['./contest.component.css']
})
export class ContestComponent implements OnInit {

  public loading: Boolean = true;
  public winners: any[] = [];
  public candidates: any[] = [];

  public minimums = {
    1: '16,000 CSTT',
    2: '8,000 CSTT',
    3: '6,000 CSTT',
    4: '4,000 CSTT',
    5: '2,000 CSTT',
    6: '1,000 CSTT',
    8: '800 CSTT',
    10: '400 CSTT'
  };
  public prizes = {
    1: '$5,000',
    2: '$2,000',
    3: '$1,500',
    4: '$1,000',
    5: '$500',
    6: '$250',
    8: '$200',
    10: '$100'
  };
  public missingWinners: number[] = [1, 2, 3, 4, 5, 6, 8, 10];
  public constructor(
    private _http: HttpService,
    private _localStorage: LocalStorageService
  ) { }

  public ngOnInit() {
    // Get contest data
    this._http.nonAuthorizedRequest('/auth/contest', {}, 'GET').subscribe((data: any) => {
      this.winners = data.winners;
      this.candidates = data.candidates;
      this._localStorage.setItem('winners', this.winners);
      this._localStorage.setItem('candidates', this.candidates);
      if (this.winners.length) {
        const topPosition: number = this.winners[0].position;
        const topIndex: number = this.missingWinners.indexOf(topPosition);
        this.missingWinners = this.missingWinners.slice(0, topIndex);
      }
      this.loading = false;
    });

    // Prepare frontend
    const roboto = document.createElement('link');
    roboto.href = 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900';
    roboto.rel = 'stylesheet';
    document.head.appendChild(roboto);
    const fontawesome = document.createElement('link');
    fontawesome.href = 'https://use.fontawesome.com/releases/v5.0.10/css/all.css';
    fontawesome.rel = 'stylesheet';
    document.head.appendChild(fontawesome);
    const bootstrap = document.createElement('link');
    bootstrap.href = '/assets/css/bootstrap.min.css';
    bootstrap.rel = 'stylesheet';
    bootstrap.type = 'text/css';
    document.head.appendChild(bootstrap);
    const el1 = document.createElement('script');
    const el2 = document.createElement('script');
    const el3 = document.createElement('script');
    const el4 = document.createElement('script');
    const el5 = document.createElement('script');
    el1.src = '/assets/js/jquery.bundle.js';
    el1.onload = () => {
      el2.src = '/assets/js/bootstrap.min.js';
      el3.src = '/assets/js/particles.js';
      el4.src = '/assets/js/countdown.js';
      el5.src = '/assets/js/contest.js';
      document.body.appendChild(el2);
      document.body.appendChild(el3);
      document.body.appendChild(el4);
      document.body.appendChild(el5);
    } ;
    document.body.appendChild(el1);
  }

}
