import {WithdrawalEffects} from './withdrawal.effect';
import {WalletsEffects} from './wallets.effect';
import {SocialNetworkEffects} from './social-network.effect';
import {PersonalInfoEffects} from './personal-info.effects';
import {PasswordEffects} from './password.effects';
import {RouterEffects} from './router.effect';
import {AuthEffects} from './auth.effect';
import {TwoFactorEffects} from './twofactor.effect';

// tslint:disable-next-line: typedef
export const effects = [
  AuthEffects,
  RouterEffects,
  PasswordEffects,
  PersonalInfoEffects,
  TwoFactorEffects,
  SocialNetworkEffects,
  WalletsEffects,
  WithdrawalEffects,
];

