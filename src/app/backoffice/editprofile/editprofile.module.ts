import {NgModule, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditprofileComponent} from './editprofile.component';
import {Router} from '@angular/router';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EditprofileComponent]
})
export class EditprofileModule implements OnInit {
  firstname;
  lastname;
  country = '';
  etherbase;
  userid;

  constructor(
    private userservice: UserService,
    private router: Router,
    private validationservice: ValidationService
  ) {
  }

  ngOnInit() {
    this.userid = JSON.parse(localStorage.getItem('auth_user')).id;
    console.log(this.userid);
    // get data of loggedIn user and set the variables
    this.userservice.getUser(this.userid).subscribe(data => {
      console.log(data);
      this.firstname = data.profile.firstname;
      this.lastname = data.profile.lastname;
      this.country = data.profile.country;
      this.etherbase = data.profile.etherbase;
    });
  }

  onSave() {
    let profile = {
      userid: this.userid,
      firstname: this.firstname,
      lastname: this.lastname,
      country: this.country,
      etherbase: this.etherbase
    };
    if (!this.validationservice.validateProfile(profile)) {
      alert("All fields are mendatory!");
      return;
    }
    this.userservice.createProfile(profile).subscribe(data => {
      if (data.success) {
        alert('Profile successfully updated!');
        this.router.navigate(['/dashboard']);
      } else {
        alert('Error while updating data! Please try again.');
      }
    });
  }
}
