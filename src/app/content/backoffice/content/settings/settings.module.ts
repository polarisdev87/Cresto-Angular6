import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { PasswordComponent } from './password/password.component';
import { TwoFactorAuthComponent } from './two-factor-auth/two-factor-auth.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/modules/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store/effects';
import { reducers } from './store/reducers';
import { NgxLoaderIndicatorModule } from 'ngx-loader-indicator';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: SettingsComponent }
    ]),
    StoreModule.forFeature('settings', reducers),
    EffectsModule.forFeature(effects),
    NgxLoaderIndicatorModule.forRoot({loaderStyles: {
      background: 'transparent'
    }}),
  ],
  declarations: [
    SettingsComponent,
    PasswordComponent,
    TwoFactorAuthComponent,
    PersonalInformationComponent,
  ]
})
export class SettingsModule {
}
