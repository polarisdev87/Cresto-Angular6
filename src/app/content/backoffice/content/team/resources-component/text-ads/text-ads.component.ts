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
      touch: false,
      loop: true
    };
  }

  public ngOnInit() {
    this.slides = [
      {
        label: 'Affiliate Marketing Crypto Profit Sharing',
        text: `JOIN ICO NOW! Click Here`
      },
      {
        label: 'Crest Token - Crypto Profit Sharing',
        text: `ICO is Now Live. Join Today `
      },
      {
        label: 'Crypto Profit Sharing With AI',
        text: `Join ICO Now. Selling FAST! Click Here`
      },
      {
        label: 'WOW. Crypto Cash Daily.',
        text: `Crest Token. ICO NOW LIVE. Click Here`
      },
      {
        label: 'Crest DigiAd Platform.',
        text: `Crypto Profit Sharing. Join Live ICO.`
      },
      {
        label: 'Affiliate Marketing AI Profit Sharing.',
        text: `Earn Cash with Crest. Join ICO. Click Here`
      },
      {
        label: 'Crypto Cash Daily with Crest.',
        text: `ICO is on FIRE! Click Here`
      },
      {
        label: 'Daily Passive Crypto 1-2% Daily Guaranteed ICO - LIMITED SPOTS',
        text: `ALERT: Daily Passive Income 2% Daily. Meet The Team`
      },
      // {
      //   label: 'WARNING: Earn 1.15% to 2.25% Daily Interest. Guaranteed + Verified. ALERT: 1.15% to 2.25% Paid Daily. Proven + Guaranteed!',
      //   text: `LIMITED: $1 million sold out in 3 Hours. JOIN ICO NOW! HURRY! $3.5 Million Sold in 24 Hours. 20k Telegram Group. JOIN NOW! OMG! $2.7 Million Sold in 3 Days. 20k Telegram Group. LIMITED ICO`
      // },
      {
        label: 'ALERT: 1.15% to 2.25% Paid Daily. Proven + Guaranteed!JOIN ICO NOW!',
        text: `LIMITED! Grab $92.50 in FREE Tokens. Crest Platform Pre-ICO is almost SOLD OUT!`
      }
    ];
  }

}
