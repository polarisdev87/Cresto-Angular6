import { AuthServiceConfig, GoogleLoginProvider } from 'angular5-social-login';
import { environment } from '../environments/environment';
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
