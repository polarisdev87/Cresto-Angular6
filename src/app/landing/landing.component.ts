import {Component} from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.bundle.css', './landing.component.css']
})
export class LandingComponent {
  ngOnInit() {
    const el1 = document.createElement('script');
    const el2 = document.createElement('script');
    el1.src = 'assets/js/jquery.bundle.js';
    el1.onload = () => {
      el2.src = 'assets/js/script.js';
      document.body.appendChild(el2);
    }
    document.body.appendChild(el1);

  }
}
