type User = {
  _id: number;
  username: string;
  name: string;
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
  referredBy: string,
  referralHash: string,
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


type UserToCreate = {
  username: string,
  email: string,
  password: string,
  name: string
}


type UserToEdit = {
  name: string
}

type PasswordData = {
  currentPassword?: string;
  password: string;
  hash?: string
};

type EditPasswordData = {
  currentPassword?: string;
  password?: string;
};
