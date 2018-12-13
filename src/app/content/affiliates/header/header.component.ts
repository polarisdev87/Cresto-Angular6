import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  public show = false;
  public usersCount = 0;
  public constructor (
    private _http: HttpService
  ) { }

  public ngOnInit() {
    this._http.nonAuthorizedRequest('/auth/total', {}, 'GET').subscribe((data: any) => {
      this.usersCount = data.total_users;
    });
  }
}
