import { EditUserRequest } from './../../../store/actions/user.actions';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IRootState } from '../../../../../store/reducers';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.sass']
})
export class PersonalInformationComponent implements OnInit {

  public switch = true;
  public user$: Observable<User>;
  public name: FormControl = new FormControl({value: '', disabled: true}, [Validators.required]);

  public constructor(
    private _store: Store<IRootState>,
  ) {}

  public ngOnInit() {
    this.user$ = this._store.select('backoffice', 'user');
    this._store.select('backoffice', 'user').subscribe((user: User) => this.name.setValue(user.name));
  }

  public setDisabledState(): void {
    this.switch = !this.switch;
    this.switch
      ? this.name.disable()
      : this.name.enable();
  }

  public editProfile(): void {
    this._store.dispatch(new EditUserRequest({ name: this.name.value }));
  }
}
