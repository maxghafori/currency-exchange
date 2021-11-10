import React from 'react';
import { WalletSelector } from 'src/components';
import { Container, Card, Title } from './HomePage.styles';

export function HomePage() {
  return (
    <Container>
      <Card>
        <Title>Exchange your money!</Title>
        <WalletSelector />

      </Card>
    </Container>
  );
}
