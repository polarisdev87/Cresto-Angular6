import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})

export class FooterComponent implements OnInit {
  public isPreico;
  @Input() public customClass: String = '';
  public constructor(
    private _router: Router
  ) { }

  public ngOnInit() {
    this.isPreico = this._router.url.match('/pre-ico') ? true : false;
  }
}
