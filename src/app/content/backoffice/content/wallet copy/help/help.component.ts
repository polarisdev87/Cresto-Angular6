import { Component } from '@angular/core';


@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.sass']
})
export class HelpComponent {

  public toggleClassActive = false;
  public isActive = false;

  public submitButton = {
    name: 'Submit',
    class: 'emptyGreen'
  };

  public toggleClass() {
    this.toggleClassActive = !this.toggleClassActive;
  }

  public toggleClassIsActive() {
    this.isActive = !this.isActive;
  }

}
