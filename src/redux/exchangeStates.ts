import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CurrencyType, WalletType } from 'src/types';
import { truncate } from 'src/utils/number';

interface ExchangeStatesType {
  currencies: CurrencyType;
  wallets: WalletType;
  fromWallet: string,
  toWallet: string,
  fromAmount: string,
  toAmount: string,
  exchangeRate: number,
  error:string
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
  error: '',
};

const exchangeSlice = createSlice({
  name: 'exchangeSlice',
  initialState,
  reducers: {
    exchangeCurrency(state) {
      if (Number(state.fromAmount) <= state.wallets[state.fromWallet].balance && state.fromWallet !== state.toWallet) {
        state.wallets[state.fromWallet].balance = Number(truncate(state.wallets[state.fromWallet].balance -= Number(state.fromAmount)));
        state.wallets[state.toWallet].balance = Number(truncate(state.wallets[state.toWallet].balance += Number(state.toAmount)));
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
    changeAmount(state, action: PayloadAction<{ type: 'FROM' | 'TO', amount: string }>) {
      if (action.payload.type === 'FROM') {
        state.fromAmount = action.payload.amount;
        state.toAmount = Number(action.payload.amount) > 0 ? truncate(state.exchangeRate * Number(action.payload.amount)) : '';
      } else {
        state.toAmount = action.payload.amount;
        state.fromAmount = Number(action.payload.amount) > 0 ? truncate(state.exchangeRate * Number(action.payload.amount)) : '';
      }
      if (Number(state.fromAmount) > state.wallets[state.fromWallet].balance) {
        state.error = 'Exceeds balance';
      } else {
        state.error = '';
      }
    },
    setExchangeRate(state, action: PayloadAction<number>) {
      state.exchangeRate = action.payload;
    },
  },
});

export default exchangeSlice.reducer;
export const {
  exchangeCurrency, selectWallet, changeAmount, setExchangeRate,
} = exchangeSlice.actions;
