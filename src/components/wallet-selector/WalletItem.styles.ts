import styled from 'styled-components/native';

export const ItemWrapper = styled.Pressable`
  margin: 5px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.secondaryColor};
  align-items: center;
  padding: 20px;
`;

export const WalletTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  color: ${(props) => props.theme.colors.primaryTextColor};
`;

export const WalletSubTitle = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.colors.secondaryTextColor};
`;

export const WalletBalance = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primaryTextColor};
`;
