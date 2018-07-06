import { Component } from '@angular/core';


@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.sass']
})
export class HelpComponent {

  toggleClassActive = false;
  isActive = false;

  public submitButton = {
    name: 'Submit',
    class: 'emptyGreen'
  };

  toggleClass() {
    this.toggleClassActive = !this.toggleClassActive;
  }


  toggleClassIsActive() {
    this.isActive = !this.isActive;
  }

}
