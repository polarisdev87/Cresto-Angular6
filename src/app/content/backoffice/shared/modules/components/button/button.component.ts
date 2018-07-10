import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-button',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent {
  @Input()
  public buttonState = {
    name: String,
    class: String
  };
}
