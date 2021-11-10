import React from 'react';
import { WalletSelector } from 'src/components';
import {
  AmountInput, InputWrapper, Container, Type,
} from './ExchangeRow.styles';

interface ExchangeRowProps{
    type:'FROM'|'TO'
}

export const ExchangeRow = ({ type }:ExchangeRowProps) => (
  <Container>
    <WalletSelector />
    <InputWrapper>
      <Type>{type === 'FROM' ? '-' : '+'}</Type>
      <AmountInput />
    </InputWrapper>
  </Container>
);
