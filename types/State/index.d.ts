type PasswordState = {
  updated: boolean;
  error: string;
};

type AuthState = {
  isLogged: boolean;
  loaded: boolean;
  loading: boolean;
  loginError: string,
  signUpError: string
};

type AclState = Acl | {};

type WalletState = {
  isLoading: boolean;
  isLoaded: boolean;
  data: any[],
  generatedAddress: string | null
}

type PurchaseState = {
  isLoading: boolean;
  isLoaded: boolean;
  data: PurchaseData[]
}
