import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux';
import {
  BackLine, Container, RateText, RateWrapper,
} from './ExchangeRate.styles';

export const ExchangeRate = () => {
  const fromWallet = useSelector((root:RootState) => root.exchangeState.fromWallet);
  const toWallet = useSelector((root:RootState) => root.exchangeState.toWallet);
  const exchangeRate = useSelector((root:RootState) => root.exchangeState.exchangeRate);
  return (
    <Container>
      <BackLine />
      <RateWrapper>
        <RateText>{`1 ${fromWallet} = ${exchangeRate} ${toWallet}`}</RateText>
      </RateWrapper>
    </Container>
  );
};
