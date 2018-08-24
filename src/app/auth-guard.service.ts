import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { Route } from '@angular/compiler/src/core';
import { IRootState } from './store/reducers';

@Injectable()
export class AuthGuardService implements CanLoad {

  public constructor(
    private _store: Store<IRootState>,
    private _router: Router,
  ) {}

  public canLoad(route: Route): Observable<boolean> {
    const url: string = (route as any).path;

    return this._store.select('auth', 'isLogged').pipe(
      take(1),
      switchMap((isLogged: boolean) => {
        if (isLogged) {
          // Remove Useproof pixel script when user is logged in
          const pixel_useproof = document.getElementById('useproof_scr');
          if (pixel_useproof && pixel_useproof.parentNode) {
            pixel_useproof.parentNode.removeChild(pixel_useproof);
          }
          // Remove linkedin ad pixel
          const pixel_lnk = document.getElementById('_lnk_ad');
          if (pixel_lnk && pixel_lnk.parentNode) {
            pixel_lnk.parentNode.removeChild(pixel_lnk);
          }
        } else {
          // Insert Useproof/Linkedin pixel script only when user is not logged in
          if (!document.getElementById('useproof_scr')) {
            const pixel1 = document.createElement('script');
            pixel1.id = 'useproof_scr';
            pixel1.src = 'https://cdn.useproof.com/proof.js?acc=3xhiSICM81Xs32RqfCshk86aiNs1';
            pixel1.async = true;
            document.head.appendChild(pixel1);
          }
          if (!document.getElementById('useproof_scr')) {
            const pixel2 = document.createElement('div');
            pixel2.id = '_lnk_ad';
            pixel2.innerHTML = `
<script type="text/javascript">
  _linkedin_partner_id = "452953";
  window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
  window._linkedin_data_partner_ids.push(_linkedin_partner_id);
</script>
<script type="text/javascript">
  (function(){var s = document.getElementsByTagName("script")[0];
  var b = document.createElement("script");
  b.type = "text/javascript";b.async = true;
  b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
  s.parentNode.insertBefore(b, s);})();
</script>
<noscript>
  <img height="1" width="1" style="display:none;" alt="" src="https://dc.ads.linkedin.com/collect/?pid=452953&fmt=gif" />
</noscript>
            `;
            document.body.appendChild(pixel2);
          }
        }

        if (!isLogged && (url === 'login' || url === 'signup' || url === 'reset-password')) {
          return of(true);
        }

        if (isLogged && (url === 'login' || url === 'signup' || url === 'reset-password')) {
          this._router.navigate(['/dashboard']);
          return of(false);
        }

        if (!isLogged) {
          this._router.navigate(['/login']);
        }
        return of(isLogged);
      })
    );

  }
}
