import React, { useState } from "react";
import styled from "styled-components";
import Category from "./Category";

const Container = styled.div`
  height: 40vh;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  background-color: #383838;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:before {
    content: "";
    width: 200px;
    height: 48px;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.5);
    top: 0;
    left: 0;
    border-radius: 10px;
    z-index: 1;
    transform: ${(props) => `translateX(${props} * 100%)`};
    transition: all 0.3s ease;
  }
`;

const Categories = () => {
  const [index, setIndex] = useState(0);

  console.log(index);

  return (
    <Container>
      <Wrapper width={index}>
        <Category onClick={() => setIndex(0)} name="Hà Tiều Phu" />
        <Category onClick={() => setIndex(1)} name="Gầy Best Lee" />
        <Category onClick={() => setIndex(2)} name="Bí kiếp troll team" />
      </Wrapper>
    </Container>
  );
};

export default Categories;
