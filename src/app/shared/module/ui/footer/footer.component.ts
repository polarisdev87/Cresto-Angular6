import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})

export class FooterComponent {

  @Input() public customClass: String = '';

  public scrollTop() {
    scrollTo(1, 1);
  }
}
