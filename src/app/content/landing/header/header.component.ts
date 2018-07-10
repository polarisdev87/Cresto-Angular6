import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  public show = false;
  public fixed = '';

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
