import React from 'react';
import { ExchangeRow, ExchangeRate } from 'src/components';
import {
  Container, Card, Title, ExchangeButton, ButtonText,
} from './HomePage.styles';

export function HomePage() {
  return (
    <Container>
      <Card>
        <Title>Exchange your money!</Title>
        <ExchangeRow type="FROM" />
        <ExchangeRate />
        <ExchangeRow type="TO" />
        <ExchangeButton>
          <ButtonText>Exchange</ButtonText>
        </ExchangeButton>
      </Card>
    </Container>
  );
}
