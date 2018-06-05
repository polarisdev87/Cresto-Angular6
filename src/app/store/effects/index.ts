import { SocialNetworkEffects } from './social-network.effect';
import { PersonalInfoEffects } from './personal-info.effects';
import { PasswordEffects } from './password.effects';
import { AclEffects } from './acl.effect';
import { RouterEffects } from './router.effect';
import { AuthEffects } from './auth.effect';
import { TwoFactorEffects } from './twofactor.effect';

// tslint:disable-next-line: typedef
export const effects = [
  AuthEffects,
  RouterEffects,
  AclEffects,
  PasswordEffects,
  PersonalInfoEffects,
  TwoFactorEffects,
  SocialNetworkEffects
];

