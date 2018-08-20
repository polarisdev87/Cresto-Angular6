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
    this._http.nonAuthorizedRequest('/auth/total', {}, 'GET').subscribe((data: any) => {
      this.tokensCounter = Math.floor(data.tokens_sold);
      this.percentCounter = Math.floor(this.tokensCounter * 100 / 1000000);
      this.usersCounter = data.total_users;
    });
  }

}
