import React from "react";
import styled from "styled-components";

const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 0 10px;
  height: 35px;
  width: 120px;
  border: 2px solid;
  margin: 25px 5px;
`;
const Title = styled.Text`
  font-size: 16px;
`;
const Button = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
