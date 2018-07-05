import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.sass']
})
export class PasswordComponent implements OnInit {
  view:boolean = true;
  changeClassAndtype:boolean = true;
  changeClassAndTypeenter:boolean = true;
  changeClassAndTypecomfirm:boolean = true;

  constructor() { }

  ngOnInit() {
  }

  changeView() {
    this.view = !this.view;
  }
  changeClassAndType(){
    this.changeClassAndtype = !this.changeClassAndtype;
  }
  changeClassAndTypeEnter(){
    this.changeClassAndTypeenter = !this.changeClassAndTypeenter;
  }
  changeClassAndTypeComfirm(){
    this.changeClassAndTypecomfirm = !this.changeClassAndTypecomfirm;
  }

}
