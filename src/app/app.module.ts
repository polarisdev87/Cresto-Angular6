import { CustomSerializer, metaReducers, reducers } from './store/reducers';
import { WalletsService } from './shared/services/wallets.service';
import { WalletHttpService } from './shared/services/wallet-http.service';
import { SocialNetworkService } from './shared/services/social-network.service';
import { SettingsService } from './shared/services/settings.service';
import { TwoFactorService } from './shared/services/twofactor.service';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { effects } from './store/effects';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { HttpService } from './http.service';
import { AuthService } from './shared/services/auth.service';
import { LocalStorageService } from './shared/services/localStorage.service';
import { AuthGuardService } from './auth-guard.service';
import { ValidatorsService } from './shared/services/validators.service';
import {
  CRESTOOKEN_DOMAIN, CRESTOOKEN_DOMAIN_TOKEN,
  DOMAIN, DOMAIN_TOKEN, getAuthServiceConfigs, PREFIX, PREFIX_TOKEN
} from './config';
import { AppInterceptorsService } from './app-interceptors.service';
import { RouterModule } from '@angular/router';
import { AuthService as GoogleAuthService, AuthServiceConfig } from 'angular5-social-login';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RECAPTCHA_SETTINGS, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha';
import { UiModule } from './shared/module/ui/ui.module';
import { PopupComponent } from './content/backoffice/content/buy/popup/popup.component';
import { routes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    UiModule,
    RecaptchaModule.forRoot(),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot(effects),
    RouterModule.forRoot(routes),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router'
    }),
  ],
  providers: [
    HttpService,
    WalletHttpService,
    WalletsService,
    AuthService,
    LocalStorageService,
    AuthGuardService,
    ValidatorsService,
    TwoFactorService,
    SettingsService,
    SocialNetworkService,
    GoogleAuthService,
    { provide: RouterStateSerializer, useClass: CustomSerializer },
    { provide: DOMAIN_TOKEN, useValue: DOMAIN },
    { provide: PREFIX_TOKEN, useValue: PREFIX },
    { provide: CRESTOOKEN_DOMAIN_TOKEN, useValue: CRESTOOKEN_DOMAIN },
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptorsService, multi: true },
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: { siteKey: environment.googleConfig.capthca } as RecaptchaSettings,
    },
  ],
  entryComponents: [PopupComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
