import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backoffice-header',
  templateUrl: './backoffice-header.component.html',
  styleUrls: ['./backoffice-header.component.sass']
})
export class BackofficeHeaderComponent implements OnInit {

  logo: string = 'assets/images/backoffice-logo.png';

  constructor() { }

  ngOnInit() {
  }

}
