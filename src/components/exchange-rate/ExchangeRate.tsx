import React from 'react';
import {
  BackLine, Container, RateText, RateWrapper,
} from './ExchangeRate.styles';

export const ExchangeRate = () => (
  <Container>
    <BackLine />
    <RateWrapper>
      <RateText>1 GBP = 1.24 USD</RateText>
    </RateWrapper>
  </Container>
);
