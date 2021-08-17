import React from "react";
import styled from "styled-components";

const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 0 10px;
  height: 35px;
  width: 130px;
  border: 2px solid;
  margin: 25px 5px;
`;
const Title = styled.Text`
  font-size: 16px;
`;
const Button = ({ title, onPress }) => {
  return (
    <Container onPress={onPress}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
