import React from 'react';
import { WalletSelector } from 'src/components';
import { useDispatch, useSelector } from 'react-redux';
import { changeAmount, RootState } from 'src/redux';
import { View } from 'react-native';
import {
  AmountInput, InputWrapper, Container, Type, Error,
} from './ExchangeRow.styles';

interface ExchangeRowProps{
    type:'FROM'|'TO'
}

export const ExchangeRow = ({ type }:ExchangeRowProps) => {
  const value = useSelector((root: RootState) => (type === 'FROM' ? root.exchangeState.fromAmount : root.exchangeState.toAmount));
  const error = useSelector((root: RootState) => root.exchangeState.error);
  const dispatch = useDispatch();
  return (
    <>
      <Container>
        <WalletSelector type={type} />
        <View>
          <InputWrapper>
            <Type>{type === 'FROM' ? '-' : '+'}</Type>
            <AmountInput
              value={value.toString()}
              onChangeText={(text) => dispatch(changeAmount({ type, amount: text }))}
            />
          </InputWrapper>
          {type === 'FROM' && error.length > 0 && <Error>{error}</Error>}
        </View>
      </Container>

    </>
  );
};
