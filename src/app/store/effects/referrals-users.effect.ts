import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { GET_REFERRAL_USERS, GetReferralUsersSuccess } from '../actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ReferralsService } from '../../shared/services/referral.service';
import { Action } from '@ngrx/store';

@Injectable()
export class ReferralsUsersEffect {

  @Effect()
  public loadAclMap$: Observable<Action> = this.actions$
    .ofType(GET_REFERRAL_USERS).pipe(
      switchMap(() => this._referralUsers.getReferralsUsers().pipe(
        map((users: User[]) => new GetReferralUsersSuccess(users)),
      )),
    );

  public constructor(
    private actions$: Actions,
    private _referralUsers: ReferralsService
  ) { }
}
