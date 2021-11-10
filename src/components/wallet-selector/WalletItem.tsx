import React from 'react';
import { View } from 'react-native';
import { WalletType } from 'src/types';
import {
  ItemWrapper, WalletBalance, WalletTitle, WalletSubTitle,
} from './WalletItem.styles';

interface WalletItemProps{
    item:WalletType
    onClick:()=>void,
}

export const WalletItem = ({ item, onClick }:WalletItemProps) => (
  <ItemWrapper onPress={onClick}>
    <View>
      <WalletTitle>{item.code}</WalletTitle>
      <WalletSubTitle>{item.name}</WalletSubTitle>
    </View>
    <WalletBalance>{`${item.balance} ${item.symbol}`}</WalletBalance>
  </ItemWrapper>
);
