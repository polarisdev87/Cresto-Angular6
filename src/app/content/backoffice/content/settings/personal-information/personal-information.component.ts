import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.sass']
})
export class PersonalInformationComponent implements OnInit {

  public switch: boolean = true;
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.myForm = formBuilder.group({
      "userName": [{value: "Robert Williams", disabled:true}, [Validators.required]]
    });
  }

  ngOnInit() {
  }

  setDisabledState() {
    this.switch = !this.switch;
    this.switch 
    ? this.myForm.get('userName').disable()
    : this.myForm.get('userName').enable()
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.myForm.controls[controlName];
    
     const result = control.invalid && control.touched;


    
     return result;
    }

}
