import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, setExchangeRate } from 'src/redux';
import { useExchangeRate } from 'src/api';
import {
  BackLine, Container, RateText, RateWrapper,
} from './ExchangeRate.styles';

export const ExchangeRate = () => {
  const fromWallet = useSelector((root:RootState) => root.exchangeState.fromWallet);
  const toWallet = useSelector((root:RootState) => root.exchangeState.toWallet);
  const exchangeRate = useSelector((root:RootState) => root.exchangeState.exchangeRate);
  const dispatch = useDispatch();

  const { data: rate } = useExchangeRate(fromWallet, toWallet);

  useEffect(() => {
    if (rate) {
      dispatch(setExchangeRate(Number(Number(rate[`${fromWallet}_${toWallet}`]).toFixed(2))));
    }
  }, [dispatch, fromWallet, rate, toWallet]);

  return (
    <Container>
      <BackLine />
      <RateWrapper>
        <RateText>{`1 ${fromWallet} = ${exchangeRate} ${toWallet}`}</RateText>
      </RateWrapper>
    </Container>
  );
};
