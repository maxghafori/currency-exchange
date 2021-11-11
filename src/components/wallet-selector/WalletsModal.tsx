import { FlatList, Modal } from 'react-native';
import React, { useCallback } from 'react';
import { WalletType } from 'src/types';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux';
import { CenteredView, ModalContainer, ModalTitle } from './WalletSelector.styles';
import { WalletItem } from './WalletItem';

interface WalletsModalProps{
    open:boolean,
    onClose:()=>void,
    onWalletClick:(item:WalletType)=>void
}

export const WalletsModals = ({ open, onClose, onWalletClick }:WalletsModalProps) => {
  const currencies = useSelector((state:RootState) => state.exchangeState.currencies);

  const renderItem = useCallback(({ item }) => (
    <WalletItem
      item={item}
      onClick={(wallet) => {
        onWalletClick(wallet);
        onClose();
      }}
    />
  ), [onClose, onWalletClick]);

  return (
    <Modal animationType="slide" transparent visible={open} onRequestClose={onClose}>
      <CenteredView onPress={onClose}>
        <ModalContainer>
          <ModalTitle>Wallets</ModalTitle>
          <FlatList data={Object.values(currencies)} renderItem={renderItem} />
        </ModalContainer>
      </CenteredView>
    </Modal>
  );
};
