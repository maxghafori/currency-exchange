import React from 'react';
import {
  act, cleanup, render, waitFor,
} from '@testing-library/react-native';
import { ExchangeRate } from 'src/components';
import WrapComponent from 'src/utils/Wrapper.mock';
import { selectWallet, store } from 'src/redux';

afterEach(cleanup);

test('ExchangeRate First Load Test ', async () => {
  const { queryByText } = render(<WrapComponent><ExchangeRate /></WrapComponent>);
  await waitFor(() => {
    expect(queryByText(/USD/)).toBeDefined();
    expect(queryByText(/EUR/)).toBeDefined();
    expect(queryByText(/GBP/)).toBeNull();
  });
});

test('ExchangeRate Select Wallet Test', async () => {
  const { queryByText } = render(<WrapComponent><ExchangeRate /></WrapComponent>);
  act(() => {
    store.dispatch(selectWallet({ type: 'FROM', wallet: 'GBP' }));
  });
  await waitFor(() => {
    expect(queryByText(/USD/)).toBeNull();
    expect(queryByText(/GBP/)).toBeDefined();
    expect(queryByText(/EUR/)).toBeDefined();
  });
});
