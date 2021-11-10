import React from 'react';
import { ExchangeRow, ExchangeRate } from 'src/components';
import { useDispatch } from 'react-redux';
import { exchangeCurrency } from 'src/redux';
import {
  Container, Card, Title, ExchangeButton, ButtonText,
} from './HomePage.styles';

export function HomePage() {
  const dispatch = useDispatch();
  return (
    <Container>
      <Card>
        <Title>Exchange your money!</Title>
        <ExchangeRow type="FROM" />
        <ExchangeRate />
        <ExchangeRow type="TO" />
        <ExchangeButton onPress={() => dispatch(exchangeCurrency())}>
          <ButtonText>Exchange</ButtonText>
        </ExchangeButton>
      </Card>
    </Container>
  );
}
