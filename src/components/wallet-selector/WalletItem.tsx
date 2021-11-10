import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux';
import { WalletType } from 'src/types';
import {
  ItemWrapper, WalletBalance, WalletTitle, WalletSubTitle,
} from './WalletItem.styles';

interface WalletItemProps {
    item: {
        code: string,
        name: string,
        symbol: string
    }
    onClick: (item: WalletType) => void,
}

export const WalletItem = ({ item, onClick }: WalletItemProps) => {
  const wallets = useSelector((state: RootState) => state.exchangeState.wallets);
  return (
    <ItemWrapper onPress={() => onClick({ [item.code]: wallets[item.code] })}>
      <View>
        <WalletTitle>{item.code}</WalletTitle>
        <WalletSubTitle>{item.name}</WalletSubTitle>
      </View>
      <WalletBalance>{`${wallets[item.code].balance} ${item.symbol}`}</WalletBalance>
    </ItemWrapper>
  );
};
