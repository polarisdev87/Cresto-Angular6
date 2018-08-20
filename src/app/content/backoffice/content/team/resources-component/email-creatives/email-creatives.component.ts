import { Component, OnInit } from '@angular/core';
import { NguCarousel } from '@ngu/carousel';

@Component({
  selector: 'app-email-creatives',
  templateUrl: './email-creatives.component.html',
  styleUrls: ['./email-creatives.component.sass']
})
export class EmailCreativesComponent implements OnInit {

  public emailCarousel: NguCarousel;
  public slides: any[] = [];
  public constructor() {
    this.emailCarousel = {
      grid: { xs: 1, sm: 3, md: 4, lg: 5, all: 0},
      speed: 500,
      point: {
        visible: false
      },
      interval: 5000,
      touch: true,
      loop: true
    };
  }

  public ngOnInit() {
    this.slides = [
      {
        image: ''
      },
      {
        image: ''
      },
      {
        image: ''
      },
      {
        image: ''
      },
      {
        image: ''
      },
      {
        image: ''
      },
      {
        image: ''
      }
    ];
  }

}
