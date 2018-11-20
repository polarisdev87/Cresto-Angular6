import { Component, HostListener, OnInit } from '@angular/core';
import { HttpService } from '../../../http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  public show = false;
  public fixed = '';
  public usersCount = 0;
  public constructor (
    private _http: HttpService
  ) { }

  public ngOnInit() {
    this._http.nonAuthorizedRequest('/auth/total', {}, 'GET').subscribe((data: any) => {
      this.usersCount = data.total_users;
    });
  }

  @HostListener('window:scroll', [])
  public onWindowScroll() {
    const scrollPosition = window.scrollY;
    if ( scrollPosition > 150 ) {
      this.fixed = 'fixed';
      return;
    }
    if (this.fixed && scrollPosition < 50) {
      this.fixed = '';
    }
  }
}
