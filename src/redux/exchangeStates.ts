import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CurrencyType, WalletType } from 'src/types';

interface ExchangeStatesType {
    currencies: CurrencyType;
    wallets: WalletType;
    fromWallet: string,
    toWallet: string,
    fromAmount: string,
    toAmount: string,
    exchangeRate: number,

}

const initialState: ExchangeStatesType = {
  wallets: {
    USD: { balance: 200 },
    EUR: { balance: 150 },
    GBP: { balance: 10 },
  },
  currencies: {
    USD: { symbol: '$', name: 'Dollar', code: 'USD' },
    EUR: { symbol: '€', name: 'Euro', code: 'EUR' },
    GBP: { symbol: '£', name: 'British Pound', code: 'GBP' },
  },
  fromWallet: 'USD',
  toWallet: 'EUR',
  fromAmount: '',
  toAmount: '',
  exchangeRate: 1.2,
};

const exchangeSlice = createSlice({
  name: 'exchangeSlice',
  initialState,
  reducers: {
    exchangeCurrency(state) {
      if (Number(state.fromAmount) <= state.wallets[state.fromWallet].balance) {
        state.wallets[state.fromWallet].balance -= Number(state.fromAmount);
        state.wallets[state.toWallet].balance += Number(state.toAmount);
        state.fromAmount = '';
        state.toAmount = '';
      }
    },
    selectWallet(state, action: PayloadAction<{ type: 'FROM' | 'TO', wallet: string }>) {
      if (action.payload.type === 'FROM') {
        state.fromWallet = action.payload.wallet;
      } else {
        state.toWallet = action.payload.wallet;
      }
    },
    changeFromAmount(state, action: PayloadAction<string>) {
      state.fromAmount = action.payload;
      state.toAmount = Number(action.payload) > 0 ? Number(state.exchangeRate * Number(action.payload)).toFixed(2) : '';
    },
    changeToAmount(state, action: PayloadAction<string>) {
      state.toAmount = action.payload;
      state.fromAmount = Number(action.payload) > 0 ? Number(state.exchangeRate * Number(action.payload)).toFixed(2) : '';
    },
  },
});

export default exchangeSlice.reducer;
export const {
  exchangeCurrency, selectWallet, changeFromAmount, changeToAmount,
} = exchangeSlice.actions;
