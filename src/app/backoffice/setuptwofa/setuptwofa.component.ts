import { Component } from '@angular/core';

@Component({
  selector: 'app-setuptwofa',
  templateUrl: './setuptwofa.component.html',
  styleUrls: ['./setuptwofa.component.css']
})
export class SetupTwoFaComponent {
  qrCode;
  token;
  secretKey;

  onEnableClick() {
  }
}
