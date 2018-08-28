import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-special-video',
  templateUrl: './special-video.component.html',
  styleUrls: ['./special-video.component.css']
})
export class SpecialVideoComponent implements OnInit {

  public constructor() { }

  public ngOnInit() {
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
