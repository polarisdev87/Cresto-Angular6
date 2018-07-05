import { SocialNetworkEffects } from './social-network.effect';
import { PasswordEffects } from './password.effects';
import { RouterEffects } from './router.effect';
import { AuthEffects } from './auth.effect';

// tslint:disable-next-line: typedef
export const effects = [
  AuthEffects,
  RouterEffects,
  PasswordEffects,
  SocialNetworkEffects,
];

