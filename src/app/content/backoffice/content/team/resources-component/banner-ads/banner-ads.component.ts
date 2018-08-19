import { Component, OnInit } from '@angular/core';
import { NguCarousel, NguCarouselStore } from '@ngu/carousel';

@Component({
  selector: 'app-banner-ads',
  templateUrl: './banner-ads.component.html',
  styleUrls: ['./banner-ads.component.sass']
})
export class BannerAdsComponent implements OnInit {

  public bannerCarousel: NguCarousel;
  public slides: any[] = [];
  public downloadButton = {
    name: 'Download',
    class: 'emptyGreen'
  };
  public constructor() {
    this.bannerCarousel = {
      grid: {xs: 1, sm: 2, md: 3, lg: 4, all: 0},
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
        img: '',
        html: `
<a href="http://longwebpageurl.com">
<img src="http://longwebpageurl.com/
images/banners/XXXxYYY.jpg" /></a>
        `
      },
      {
        img: '',
        html: `
<a href="http://longwebpageurl.com">
<img src="http://longwebpageurl.com/
images/banners/XXXxYYY.jpg" /></a>
        `
      },
      {
        img: '',
        html: `
<a href="http://longwebpageurl.com">
<img src="http://longwebpageurl.com/
images/banners/XXXxYYY.jpg" /></a>
        `
      },
      {
        img: '',
        html: `
<a href="http://longwebpageurl.com">
<img src="http://longwebpageurl.com/
images/banners/XXXxYYY.jpg" /></a>
        `
      },
      {
        img: '',
        html: `
<a href="http://longwebpageurl.com">
<img src="http://longwebpageurl.com/
images/banners/XXXxYYY.jpg" /></a>
        `
      }
    ];
  }

  public myfunc(event: Event) {
    event = event;
  }

  public onmoveFn(data: NguCarouselStore) {
    data = data;
  }
}
