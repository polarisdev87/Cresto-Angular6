import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-buy-token-form',
  templateUrl: './buy-token-form.component.html',
  styleUrls: ['./buy-token-form.component.css']
})
export class BuyTokenFormComponent implements OnInit {

  tokensform: FormGroup;
  constructor() { }

  ngOnInit() {
    this.tokensform = new FormGroup({
      amount: new FormControl('', [Validators.pattern("0123456789")]),
      currency: new FormControl('BTC', [Validators.required])
    })
  }

}
