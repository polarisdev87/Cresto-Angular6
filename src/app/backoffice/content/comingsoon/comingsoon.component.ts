import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comingsoon',
  templateUrl: './comingsoon.component.html',
  styleUrls: ['./comingsoon.component.sass']
})
export class ComingsoonComponent implements OnInit {

  public title: string;
  public subtitle: string;
  public backgroundImg: string;

  public constructor(
    private _activatedRoute: ActivatedRoute
  ) { }
  public ngOnInit(): void {
    this._activatedRoute.data.subscribe((data) => {
      this.title = data.title;
      this.subtitle = data.subtitle;
      this.backgroundImg = data.backgroundImg;
    });
  }

  public background() {
    return `url("${this.backgroundImg}")`;
  }
}
