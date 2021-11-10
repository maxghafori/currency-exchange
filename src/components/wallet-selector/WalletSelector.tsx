import React, { useState } from 'react';
import { DropDown } from 'src/icons';
import { WalletType } from 'src/types';
import {
  SelectorWrapper, Row, Title, SubTitle,
} from './WalletSelector.styles';
import { WalletsModals } from './WalletsModal';
import { wallets } from './configs';

export const WalletSelector = () => {
  const [modalToggle, setModalToggle] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState<WalletType>(wallets[0]);

  return (
    <SelectorWrapper onPress={() => setModalToggle(true)}>
      <Row>
        <Title>{selectedWallet.code}</Title>
        <DropDown />
      </Row>
      <SubTitle>{`Balance: ${selectedWallet.balance}`}</SubTitle>
      <WalletsModals open={modalToggle} onClose={() => setModalToggle(false)} onWalletClick={(wallet) => setSelectedWallet(wallet)} />
    </SelectorWrapper>
  );
};
