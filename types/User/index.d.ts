type User = {
  id: number;
  email: string;
  password: string;
  name: string;
  surname: string;
  role: string;
  ethereumWallet: string;
  walletAccess: boolean;
  status: 'pending' | 'approved' | 'rejected';
  verificationStatus: 'verified' | 'unverified' | 'rejected',
  verificationModDate: Date | null,
  editRequestDate: Date,
  requestDate: Date,
  registrationDate: Date,
  registrationRequestDate: Date,
  remember?: boolean;
  expiresIn?: number;
  accessToken?: string;
  tfa: boolean;
  tempToken: string;
  swappedStatus: number;
  txkBalance: number,
  ethBalance: number,
}

type PasswordData = {
  currentPassword?: string;
  password: string;
  hash?: string
};

type EditUserData = {
  id: string,
  ethereumWallet?: string,
  status?: string,
  walletAccess?: boolean,
  verificationStatus?: string,
  verificationModDate?: Date,
  txkBalance?: number,
  ethBalance?: number,
};


type UserParams = {
  perPage: number,
  page: number,
  userTerm: string,
  status?: string,
  verificationStatus?: string
};
