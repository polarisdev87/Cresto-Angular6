import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-two-factor-auth',
  templateUrl: './two-factor-auth.component.html',
  styleUrls: ['./two-factor-auth.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class TwoFactorAuthComponent implements OnInit {

  coco = 'enableAuthenticatorSupport'; 

  buttonState2authDef = {
    name: 'Enable',
    class: 'emptyRed'
  };

  buttonState2authDesableAuthenticatorSupport = {
    name: 'Confirm',
    class: 'emptyRed'
  };

  myForm: FormGroup;
  enableAuthenticatorSupportForm: FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      'loginPassword': new FormControl('', Validators.required),
      'googleCode': new FormControl('', Validators.required)
    });

    this.enableAuthenticatorSupportForm = new FormGroup({

      'secretCode': new FormControl(''),
      'codeProvided': new FormControl('', Validators.required)
    });

  }

  ngOnInit() {
  }

  submit() {
    console.log(this.enableAuthenticatorSupportForm);
  }

}
