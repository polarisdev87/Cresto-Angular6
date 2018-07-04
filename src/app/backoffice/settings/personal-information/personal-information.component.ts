import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.sass']
})
export class PersonalInformationComponent implements OnInit {

  public switch: boolean = true;
  // form : FormGroup;

  constructor() { 
    // this.form = formBuilder.group({
    //   "userName": ["Robert Williams", Validators.required],
    //   "userEmail": ["robert@gmail.com", [
    //     Validators.required,
    //     Validators.pattern("[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}")
    //   ]],
    //   "userSponsor": ["crestreferral001"]
    // });
  }

  ngOnInit() {
  }

  setDisabledState() {
    this.switch = !this.switch
  }

}
