export type TransactionType =
  | 'deposit'
  | 'withdraw'
  | 'reward'
  | 'entry_fee'
  | 'refund'
  | 'gift';

export interface WalletResponse {
  id: string;
  main_balance: string;
  internal_balance: string;
  updated_at: string;
}

export interface TransactionResponse {
  id: string;
  type: TransactionType;
  amount: string;
  description?: string | null;
  created_at: string;
}

export interface TransactionListResponse {
  transactions: TransactionResponse[];
  total: number;
}

export interface GetTransactionsParams {
  type?: TransactionType;
  skip?: number;
  limit?: number;
}

export interface DepositRequest {
  amount: number | string;
}

export interface WithdrawRequest {
  amount: number | string;
}

export interface BankCardResponse {
  id: string;
  card_number_masked: string;
  holder_name?: string | null;
  is_active: boolean;
  created_at: string;
}

export interface BankCardCreate {
  card_number: string;
  holder_name?: string;
}

export interface GiftCodeRedeemRequest {
  code: string;
}

export interface GiftCodeRedeemResponse {
  amount: string;
  main_balance: string;
}
