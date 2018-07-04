import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.sass']
})
export class PersonalInformationComponent implements OnInit {

  public switch: boolean = true;

  constructor() { 

  }

  ngOnInit() {
  }

  setDisabledState() {
    this.switch = !this.switch;
  }

}
