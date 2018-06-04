type User = {
  _id: number;
  username: string;
  email: string;
  password: string;
  remember: boolean;
  role: string;
  hash: string;
  timeOfHashLife: string;
  tempToken: string;
  tempSecret: string;
  dataURL: string;
  otpURL: string;
  expiresIn: number;
  accessToken: string;
  profile: {
    firstname: string,
    lastname: string,
    country?: string,
    etherbase?: string
  },
  topcoins: number,
  referredBy: string,
  referrals: any[],
  isVerified: boolean,
  twofactorEnabled: boolean,
  verificationToken: string,
  twofactor: any,
  google: {
    id: String,
    token: String
  },
  facebook: {
    id: String,
    token: String
  }
};



type PasswordData = {
  currentPassword?: string;
  password: string;
  hash?: string
};
