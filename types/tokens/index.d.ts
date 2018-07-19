type CalculateTokensSum = {
  userId: string,
  quote_asset_id?: number,
  amount: number
};

type TokenPrice = {
  price: number,
};

type CalculateFee = {
  userId?: string,
  wallet_id?: number,
  amount: number,
};

type WithdrawalRes = {
  fee: number,
  total: number,
  available: number
};


type WithdrawalBody = {
  userId?: string,
  amount: number,
  address: number,
  wallet_id: number | undefined
};

type GenerateWalletAddress = {
  userId?: string,
  wallet_id: number,
  address?: string,
};


type WalletData = {
  id?: number
  code?: string
  chain?: string
  balance: number
  usd_balance?: number
  top_up_address?: string
  asset?: any
};

type PurchaseData = {
  id: number,
  code: string,
  balance: number,
  usd_balance: number,
  date: string,
  amount: number
};
