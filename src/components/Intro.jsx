import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: relative;

  &:after {
    content: "";
    width: 240px;
    height: 1px;
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
  }
`;

const Title = styled.h1`
  color: #ffffff;
  font-size: 36px;
  font-weight: 500;
  margin-bottom: 12px;
  font-style: italic;
`;

const Desc = styled.p`
  color: #ffffff;
  font-size: 18px;
`;

const Intro = () => {
  return (
    <Container>
      <Title>Design</Title>
      <Desc>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
        neque.
      </Desc>
    </Container>
  );
};

export default Intro;
