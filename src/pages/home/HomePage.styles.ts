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
  background-color: ${(props) => props.theme.colors.card};
`;

export const Title = styled.View`
  font-size: 16px;
  font-weight: bold;
`;
