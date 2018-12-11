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
        label: 'CoinZilla',
        link: 'https://coinzilla.io',
        text: ``
      },
      {
        label: 'Coin Ad',
        link: 'https://coinad.com/?a=Advertise',
        text: ``
      },
      {
        label: 'Crypto Ad Network',
        link: 'https://token.ad',
        text: ``
      },
      {
        label: 'Bit Traffic',
        link: 'https://bittraffic.com',
        text: ``
      },
      {
        label: 'Coin Market Cap',
        link: 'https://coinmarketcap.com',
        text: ``
      },
      {
        label: 'Traffic For Me',
        link: 'https://www.trafficforme.com/',
        text: ``
      },
      {
        label: 'Udimi',
        link: 'https://udimi.com/',
        text: ``
      },
      {
        label: 'Google Adwords',
        link: 'https://ads.google.com/home/',
        text: ``
      },
      {
        label: 'Bitcoin Advertising Platform',
        link: 'https://bitmedia.io',
        text: ``
      },
      {
        label: 'A - Ads',
        link: 'https://a-ads.com',
        text: ``
      },
      {
        label: 'Bing Ads',
        link: 'https://bingads.microsoft.com',
        text: ``
      },
      {
        label: 'Start App - ICO Advertising',
        link: 'https://lp.startapp.com/ico_campaign/',
        text: ``
      },
      {
        label: 'AdEx',
        link: 'https://www.adex.network',
        text: ``
      },
      {
        label: 'AdBit',
        link: 'https://adbit.biz',
        text: ``
      },
      {
        label: 'Coinverti',
        link: 'https://coinverti.com',
        text: ``
      },
      {
        label: 'AB Chain',
        link: 'https://ab-chain.com/',
        text: ``
      }
    ];
  }

}
