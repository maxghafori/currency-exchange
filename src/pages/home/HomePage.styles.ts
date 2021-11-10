import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  max-width:${(props) => props.theme.size.maxWidth};
  align-self: center;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Card = styled.View`
  box-shadow: 1px 1px 5px #0000001A;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  align-items: center;
  width:100%;
  min-height: 400px;
  align-self: center;
  padding: 10px;
  justify-content: space-evenly;
  background-color: ${(props) => props.theme.colors.card};
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const ExchangeButton = styled.Pressable`
  background-color: ${(props) => props.theme.colors.primaryColor};
  align-items: center;
  justify-content: center;
  align-self: center;
  width: 40%;
  height: 50px;
  border-radius: 25px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: white;
  font-weight: bold;
`;
