import apiClient from '../config';
import type {
  BankCardCreate,
  BankCardResponse,
  DepositRequest,
  GetTransactionsParams,
  GiftCodeRedeemRequest,
  GiftCodeRedeemResponse,
  TransactionListResponse,
  WalletResponse,
  WithdrawRequest,
} from './wallet';

export const getMyWalletReq = async (): Promise<WalletResponse> => {
  const response = await apiClient.get<WalletResponse>('wallet');
  return response.data;
};

export const listTransactionsReq = async (
  params: GetTransactionsParams = {},
): Promise<TransactionListResponse> => {
  const response = await apiClient.get<TransactionListResponse>('wallet/transactions', {
    params,
  });
  return response.data;
};

export const depositReq = async (payload: DepositRequest): Promise<WalletResponse> => {
  const response = await apiClient.post<WalletResponse>('wallet/deposit', payload);
  return response.data;
};

export const withdrawReq = async (payload: WithdrawRequest): Promise<WalletResponse> => {
  const response = await apiClient.post<WalletResponse>('wallet/withdraw', payload);
  return response.data;
};

export const getBankCardReq = async (): Promise<BankCardResponse | null> => {
  const response = await apiClient.get<BankCardResponse | null>('wallet/card');
  return response.data;
};

export const setBankCardReq = async (
  payload: BankCardCreate,
): Promise<BankCardResponse> => {
  const response = await apiClient.put<BankCardResponse>('wallet/card', payload);
  return response.data;
};

export const redeemGiftCodeReq = async (
  payload: GiftCodeRedeemRequest,
): Promise<GiftCodeRedeemResponse> => {
  const response = await apiClient.post<GiftCodeRedeemResponse>(
    'wallet/gift-code/redeem',
    payload,
  );
  return response.data;
};
