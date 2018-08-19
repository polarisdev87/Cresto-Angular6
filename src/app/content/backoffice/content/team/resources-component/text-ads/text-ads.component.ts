import { Component, OnInit } from '@angular/core';
import { NguCarousel } from '@ngu/carousel';

@Component({
  selector: 'app-text-ads',
  templateUrl: './text-ads.component.html',
  styleUrls: ['./text-ads.component.sass']
})
export class TextAdsComponent implements OnInit {

  public textCarousel: NguCarousel;
  public slides: any[] = [];
  public constructor() {
    this.textCarousel = {
      grid: {xs: 2, sm: 2, md: 3, lg: 3, all: 0},
      slide: 3,
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
        label: 'Lorem ipsum dolor sit amet, consectetur',
        link: 'http://www.eample.com/deals',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing
              elit, sed do eiusmod tempor incididunt ut, labore et`
      },
      {
        label: 'Lorem ipsum dolor sit amet, consectetur',
        link: 'http://www.eample.com/deals',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing
              elit, sed do eiusmod tempor incididunt ut, labore et`
      },
      {
        label: 'Lorem ipsum dolor sit amet, consectetur',
        link: 'http://www.eample.com/deals',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing
              elit, sed do eiusmod tempor incididunt ut, labore et`
      },
      {
        label: 'Lorem ipsum dolor sit amet, consectetur',
        link: 'http://www.eample.com/deals',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing
              elit, sed do eiusmod tempor incididunt ut, labore et`
      },
      {
        label: 'Lorem ipsum dolor sit amet, consectetur',
        link: 'http://www.eample.com/deals',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing
              elit, sed do eiusmod tempor incididunt ut, labore et`
      }
    ];
  }

}
