import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../http.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.sass']
})
export class StatusComponent implements OnInit {

  public tokensCounter: number;
  public percentCounter: number;
  public usersCounter: number;

  public constructor(
    private _http: HttpService
  ) {
    this.tokensCounter = this.percentCounter = this.usersCounter = 0;
  }
  public ngOnInit() {
    this._http.nonAuthorizedRequest('/auth/total', {}, 'GET').subscribe((data: number) => {
      this.tokensCounter = 385764;
      this.percentCounter = Math.floor(this.tokensCounter * 100 / 1000000);
      this.usersCounter = data;
    });
  }

}
