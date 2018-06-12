type StoreStates = {
  auth: AuthState,
  acl: AclState,
  personalInfo: PersonalInfoState,
  password: PasswordState,
  statusPopup: StatusPopup,
};

type SettingsState = {
  personalInfo: PersonalInfoState,
  password: PasswordState,
  twoFactor: TwoFactorState
};

type TwoFactorState = {
  twoFactor: boolean
  isLoading: boolean,
  isLoaded: boolean
}

type PersonalInfoState = {
  updated: boolean;
  error: boolean;
};

type PasswordState = {
  updated: boolean;
  error: boolean;
};

type AuthState = {
  isLogged: boolean;
  user: User | {};
  loaded: boolean;
  loading: boolean;
  loginError: string,
  signUpError: string
};

type AclState = Acl | {};
type StatusPopup = any;

type WalletState = {
  isLoading: boolean;
  isLoaded: boolean;
  data: WalletData[],
  generatedAddress: string
}
