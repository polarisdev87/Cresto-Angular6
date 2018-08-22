import { Component, OnInit } from '@angular/core';
import { NguCarousel, NguCarouselStore } from '@ngu/carousel';

@Component({
  selector: 'app-banner-ads',
  templateUrl: './banner-ads.component.html',
  styleUrls: ['./banner-ads.component.sass']
})
export class BannerAdsComponent implements OnInit {

  public bannerCarousel: NguCarousel;
  public banners: string[] = [];
  public downloadButton = {
    name: 'Download',
    class: 'emptyGreen'
  };
  public constructor( ) {
    this.bannerCarousel = {
      grid: {xs: 1, sm: 2, md: 3, lg: 4, all: 0},
      slide: 3,
      speed: 500,
      point: {
        visible: false
      },
      interval: 50000,
      touch: true,
      loop: true
    };
  }

  public ngOnInit() {
    this.banners = [
      '/assets/banners/120x600_V1.jpg', '/assets/banners/120x600_V2.jpg', '/assets/banners/120x600_V3.jpg',
      '/assets/banners/120x600_V4.gif', '/assets/banners/192x192.jpg',
      '/assets/banners/200x200_V1.jpg', '/assets/banners/200x200_V2.jpg', '/assets/banners/200x200_V3.jpg',
      '/assets/banners/200x200_V4.gif',
      '/assets/banners/250x250_V1.jpg', '/assets/banners/250x250_V2.jpg', '/assets/banners/250x250_V3.jpg',
      '/assets/banners/250x250_V4.gif',
      '/assets/banners/300x250_V1.jpg', '/assets/banners/300x250_V2.jpg', '/assets/banners/300x250_V3.jpg',
      '/assets/banners/300x250_V4.gif',
      '/assets/banners/320x50_v1.jpg', '/assets/banners/320x50_v2.jpg', '/assets/banners/320x50_v3.jpg',
      '/assets/banners/320x50_v4.gif',
      '/assets/banners/320x100_V1.jpg', '/assets/banners/320x100_V2.jpg', '/assets/banners/320x100_V3.jpg',
      '/assets/banners/320x100_V4.gif', '/assets/banners/360x240.jpg',
      '/assets/banners/468x60_V1.jpg', '/assets/banners/468x60_V2.jpg', '/assets/banners/468x60_V3.jpg',
      '/assets/banners/468x60_V4.gif', '/assets/banners/627x627.jpg',
      '/assets/banners/728x90_V1.jpg', '/assets/banners/728x90_V2.jpg', '/assets/banners/728x90_V3.jpg',
      '/assets/banners/728x90_V4.gif', '/assets/banners/1200x627.jpg',
    ];
  }

  public myfunc(event: Event) {
    event = event;
  }

  public onmoveFn(data: NguCarouselStore) {
    data = data;
  }

  public async openImg(url: string) {
    window.open(url);
  }
}
