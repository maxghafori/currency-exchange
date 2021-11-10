import { FlatList, Modal } from 'react-native';
import React, { useCallback } from 'react';
import { WalletType } from 'src/types';
import { CenteredView, ModalContainer, ModalTitle } from './WalletSelector.styles';
import { WalletItem } from './WalletItem';
import { wallets } from './configs';

interface WalletsModalProps{
    open:boolean,
    onClose:()=>void,
    onWalletClick:(item:WalletType)=>void
}

export const WalletsModals = ({ open, onClose, onWalletClick }:WalletsModalProps) => {
  const renderItem = useCallback(({ item }) => (
    <WalletItem
      item={item}
      onClick={() => {
        onWalletClick(item);
        onClose();
      }}
    />
  ), [onClose, onWalletClick]);

  return (
    <Modal animationType="slide" transparent visible={open} onRequestClose={onClose}>
      <CenteredView>
        <ModalContainer>
          <ModalTitle>Wallets</ModalTitle>
          <FlatList data={wallets} renderItem={renderItem} />
        </ModalContainer>
      </CenteredView>
    </Modal>
  );
};
