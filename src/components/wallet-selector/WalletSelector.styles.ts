import styled from 'styled-components/native';

export const SelectorWrapper = styled.Pressable`
  padding: 10px;
  margin: 5px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CenteredView = styled.Pressable`
  flex:1;
  justify-content: flex-end;
  align-items: center;
  margin-top: 22px;
`;

export const ModalContainer = styled.Pressable`
  width: 100%;
  max-width:${(props) => props.theme.size.maxWidth};
  align-self: center;
  height: 45%;
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  padding: 30px;
  background-color: ${(props) => props.theme.colors.card};
`;

export const Title = styled.Text`
  font-size: 18px;
  color:  ${(props) => props.theme.colors.primaryTextColor};
`;

export const SubTitle = styled.Text`
  font-size: 12px;
  color:  ${(props) => props.theme.colors.secondaryTextColor};
`;

export const ModalTitle = styled.Text`
  font-size: 18px;
  align-self: center;
  margin: 10px;
  color:  ${(props) => props.theme.colors.primaryTextColor};
`;
