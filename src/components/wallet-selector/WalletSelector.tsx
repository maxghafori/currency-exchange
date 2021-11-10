import React, { useState } from 'react';
import { DropDown } from 'src/icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, selectWallet } from 'src/redux';
import {
  SelectorWrapper, Row, Title, SubTitle,
} from './WalletSelector.styles';
import { WalletsModals } from './WalletsModal';

interface WalletSelectorProps{
    type:'FROM'|'TO'
}

export const WalletSelector = ({ type }:WalletSelectorProps) => {
  const [modalToggle, setModalToggle] = useState(false);
  const selectedWallet = useSelector((root:RootState) => (type === 'FROM' ? root.exchangeState.fromWallet : root.exchangeState.toWallet));
  const wallets = useSelector((root:RootState) => root.exchangeState.wallets);
  const dispatch = useDispatch();

  return (
    <SelectorWrapper onPress={() => setModalToggle(true)}>
      <Row>
        <Title>{selectedWallet}</Title>
        <DropDown />
      </Row>
      <SubTitle>{`Balance: ${wallets[selectedWallet].balance}`}</SubTitle>
      <WalletsModals open={modalToggle} onClose={() => setModalToggle(false)} onWalletClick={(wallet) => dispatch(selectWallet({ type, wallet: Object.keys(wallet)[0] }))} />
    </SelectorWrapper>
  );
};
