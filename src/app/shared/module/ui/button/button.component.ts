import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent implements OnInit {
  @Input()
  buttonState = {
    name: String,
    class: String
  };
  constructor() { }

  ngOnInit() {

  }

}
