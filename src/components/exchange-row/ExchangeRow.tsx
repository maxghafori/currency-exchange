import React from 'react';
import { WalletSelector } from 'src/components';
import { useDispatch, useSelector } from 'react-redux';
import { changeFromAmount, changeToAmount, RootState } from 'src/redux';
import {
  AmountInput, InputWrapper, Container, Type,
} from './ExchangeRow.styles';

interface ExchangeRowProps{
    type:'FROM'|'TO'
}

export const ExchangeRow = ({ type }:ExchangeRowProps) => {
  const value = useSelector((root: RootState) => (type === 'FROM' ? root.exchangeState.fromAmount : root.exchangeState.toAmount));
  const dispatch = useDispatch();
  return (
    <Container>
      <WalletSelector type={type} />
      <InputWrapper>
        <Type>{type === 'FROM' ? '-' : '+'}</Type>
        <AmountInput
          value={value.toString()}
          onChangeText={(text) => {
            if (type === 'FROM') {
              dispatch(changeFromAmount(text));
            } else {
              dispatch(changeToAmount(text));
            }
          }}
        />
      </InputWrapper>
    </Container>
  );
};
