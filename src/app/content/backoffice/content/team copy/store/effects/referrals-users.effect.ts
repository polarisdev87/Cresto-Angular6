import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { TeamService } from '../../team.service';
import { GET_REFERRAL_USERS, GetReferralUsersSuccess } from '../actions/referrals-users.action';

@Injectable()
export class ReferralsUsersEffect {

  @Effect()
  public loadAclMap$: Observable<Action> = this.actions$
    .ofType(GET_REFERRAL_USERS).pipe(
      switchMap(() => this._teamService.getReferrals().pipe(
        map((users: User[]) => new GetReferralUsersSuccess(users)),
      )),
    );

  public constructor(
    private actions$: Actions,
    private _teamService: TeamService
  ) { }
}
