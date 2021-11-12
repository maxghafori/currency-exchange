import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  width: 90%;
  align-self: center;
  justify-content: space-between;
`;

export const InputWrapper = styled.View`
  flex-direction: row;
  border-radius: 10px;
  padding: 5px;
  align-items: center;
  background-color: #f8f8f8;
`;

export const AmountInput = styled.TextInput`
  padding: 10px;
`;

export const Type = styled.Text`
  font-size: 18px;
  margin-left: 5px;
`;

export const Error = styled.Text`
  font-size: 12px;
  color: darkred;
  position: absolute;
  bottom: -20px;
`;
