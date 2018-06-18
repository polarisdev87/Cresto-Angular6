import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  public show: boolean = false;
  public fixed: string = '';

  constructor() { }

  ngOnInit() {
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let scrollPosition = window.scrollY;
    if ( scrollPosition > 150 ) {
      this.fixed = 'fixed';
      return
    }
    if (this.fixed && scrollPosition < 50) {
      this.fixed = '';
    }
  }
}
