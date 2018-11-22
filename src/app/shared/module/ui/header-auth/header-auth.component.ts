import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-auth',
  templateUrl: './header-auth.component.html',
  styleUrls: ['./header-auth.component.sass']
})
export class HeaderAuthComponent implements OnInit {

  public show = false;

  public constructor() { }

  public ngOnInit() {
    const el1 = document.createElement('script');
    const el3 = document.createElement('script');
    const el4 = document.createElement('script');
    el1.src = 'assets/js/jquery.bundle.js';
    el1.onload = () => {
      el3.src = 'assets/js/particles.js';
      el4.src = 'assets/js/custom.js';
      document.body.appendChild(el3);
      document.body.appendChild(el4);
    } ;
    document.body.appendChild(el1);
  }

}
