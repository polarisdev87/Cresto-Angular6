type CalculateTokensSum = {
  userId: string,
  quote_asset_id?: number,
  amount: number
}

type TokenPrice = {
  price: number,
}

type CalculateFee = {
  userId: string,
  wallet_id?: number,
  amount: number,
}

type WithdrawalRes = {
  fee: number,
  total: number,
  available: number
}


type WithdrawalBody = {
  userId: string,
  amount: number,
  cstt_address: number
}
