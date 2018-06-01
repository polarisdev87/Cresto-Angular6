type User = {
  id: number;
  email: string;
  password: string;
  name: string;
  surname: string;
  username: string,
  role: string;
  expiresIn?: number;
  accessToken?: string;
  tfa: boolean;
  tempToken: string;
}

type PasswordData = {
  currentPassword?: string;
  password: string;
  hash?: string
};
