import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, setExchangeRate, switchWallet } from 'src/redux';
import { useExchangeRate } from 'src/api';
import { truncate } from 'src/utils/number';
import { ChangeIcon } from 'src/icons';
import { ActivityIndicator } from 'react-native';
import {
  BackLine, Container, RateText, RateWrapper, FloatButton,
} from './ExchangeRate.styles';

export const ExchangeRate = () => {
  const fromWallet = useSelector((root:RootState) => root.exchangeState.fromWallet);
  const toWallet = useSelector((root:RootState) => root.exchangeState.toWallet);
  const exchangeRate = useSelector((root:RootState) => root.exchangeState.exchangeRate);
  const dispatch = useDispatch();

  const { data: rate, isError, isLoading } = useExchangeRate(fromWallet, toWallet);

  useEffect(() => {
    if (rate) {
      dispatch(setExchangeRate(rate[`${fromWallet}_${toWallet}`]));
    }
  }, [dispatch, fromWallet, rate, toWallet]);

  return (
    <Container>
      <BackLine />
      <RateWrapper>
        {!isLoading ? <RateText>{!isError ? `1 ${fromWallet} = ${truncate(exchangeRate)} ${toWallet}` : 'API Error!'}</RateText> : <ActivityIndicator />}
      </RateWrapper>
      <FloatButton onPress={() => dispatch(switchWallet())}>
        <ChangeIcon />
      </FloatButton>
    </Container>
  );
};
