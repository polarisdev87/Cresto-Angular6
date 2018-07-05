import { AuthService } from '../../shared/services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable()
export class ResetPasswordGuardService implements CanActivate {

  public constructor(
    private _router: Router,
    private _authService: AuthService
  ) { }

  public canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this._authService.checkPasswordHash(route.params.id).pipe(
      switchMap((data: { isValidKey: boolean }) => {
        if (!data.isValidKey) {
          this._router.navigate(['/login']);
          return of(false);
        }
        return of(true);
      }),
      catchError((err: Error) => {
        // tslint:disable-next-line
        console.log(err);
        this._router.navigate(['/login']);
        return of(false);
      })
    );
  }

}
