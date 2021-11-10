import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

export const BackLine = styled.View`
  position: absolute;
  height: 1px;
  width: 100%;
  background-color: lightgrey;
`;

export const RateWrapper = styled.View`
  background-color: ${(props) => props.theme.colors.card};
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  width: 30%;
  padding: 5px;
  border-width: 1px;
  border-color: lightgrey;
`;

export const RateText = styled.Text`
  font-size: 14px;
  text-align: center;
`;
