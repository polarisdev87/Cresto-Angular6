import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { GET_REFERRAL_USERS } from '../actions';
import { switchMap } from 'rxjs/operators';
import { ReferralsService } from '../../shared/services/referral.service';

@Injectable()
export class ReferralsUsersEffect {
  @Effect()
  public referralsUsers$: Observable<any> = this.actions$
    .ofType(GET_REFERRAL_USERS).pipe(
      switchMap ((): any => this._referralUsers.getReferralsUsers())
    );
  public constructor(
    private actions$: Actions,
    private _referralUsers: ReferralsService
) {}
}
