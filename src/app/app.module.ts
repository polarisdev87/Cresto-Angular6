import { SocialNetworkService } from './shared/services/social-network.service';
import { SettingsService } from './shared/services/settings.service';
import { TwoFactorService } from './shared/services/twofactor.service';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { effects } from './store/effects';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { reducers, CustomSerializer } from './store/reducers';
import { HttpService } from './shared/services/http.service';
import { AuthService } from './shared/services/auth.service';
import { LocalStorageService } from './shared/services/localStorage.service';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { AclService } from './shared/services/acl.service';
import { ValidatorsService } from './shared/services/validators.service';
import { DOMAIN_TOKEN, DOMAIN, PREFIX, PREFIX_TOKEN } from './config';
import { AppInterceptorsService } from './shared/services/app-interceptors.service';
import { RouterModule } from '@angular/router';
import { AuthServiceConfig, AuthService as GoogleAuthService } from 'angular5-social-login';
import { getAuthServiceConfigs } from './google-config';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot(effects),
    RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login',
        loadChildren: './login/login.module#LoginModule',
        canLoad: [AuthGuardService]
      },
      {
        path: 'signup',
        loadChildren: './signup/signup.module#SignupModule',
        canLoad: [AuthGuardService] },
      {
        path: 'reset-password',
        loadChildren: './reset-password/reset-password.module#ResetPasswordModule',
        canLoad: [AuthGuardService]
      },
      {
        path: 'backoffice',
        loadChildren: './backoffice/backoffice.module#BackofficeModule',
        canLoad: [AuthGuardService]
      }
    ]),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router'
    }),
  ],
  providers: [
    HttpService,
    AuthService,
    LocalStorageService,
    AuthGuardService,
    AclService,
    ValidatorsService,
    TwoFactorService,
    SettingsService,
    SocialNetworkService,
    GoogleAuthService,
    { provide: RouterStateSerializer, useClass: CustomSerializer },
    { provide: DOMAIN_TOKEN, useValue: DOMAIN },
    { provide: PREFIX_TOKEN, useValue: PREFIX },
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptorsService, multi: true, },
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
