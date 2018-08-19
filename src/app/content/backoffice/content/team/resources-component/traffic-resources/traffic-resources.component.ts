import { Component, OnInit } from '@angular/core';
import { NguCarousel } from '@ngu/carousel';

@Component({
  selector: 'app-traffic-resources',
  templateUrl: './traffic-resources.component.html',
  styleUrls: ['./traffic-resources.component.sass']
})
export class TrafficResourcesComponent implements OnInit {

  public trafficCarousel: NguCarousel;
  public slides: any[] = [];
  public constructor() {
    this.trafficCarousel = {
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
