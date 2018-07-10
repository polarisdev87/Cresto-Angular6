import { environment } from '../environments/environment';
import { InjectionToken } from '@angular/core';
import { AuthServiceConfig, GoogleLoginProvider } from 'angular5-social-login';

export const DOMAIN: string = environment.host.api.url;
export const DOMAIN_TOKEN: InjectionToken<string> = new InjectionToken(DOMAIN);

export const PREFIX: string = environment.host.api.prefix;
export const PREFIX_TOKEN: InjectionToken<string> = new InjectionToken(PREFIX);

export const CRESTOOKEN_DOMAIN: string = environment.cresttoken.api.url;
export const CRESTOOKEN_DOMAIN_TOKEN: InjectionToken<string> = new InjectionToken(CRESTOOKEN_DOMAIN);

const googleAppId: string = environment.googleConfig.appId;

export function getAuthServiceConfigs() {
  const config: AuthServiceConfig = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider(googleAppId)
      },
    ]
  );
  return config;
}
