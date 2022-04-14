import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 200px;
  height: 48px;
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 2;

  &:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  &:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin: 0 24px 0 20px;
`;

const Name = styled.p`
  font-size: 16px;
`;

const Category = ({ name }) => {
  return (
    <Container>
      <Wrapper>
        <Avatar src="https://yt3.ggpht.com/ytc/AKedOLRdMeUndRVWyCq1zRfgKtJM9CfCwczo-rmxG20eRQ=s88-c-k-c0x00ffffff-no-rj" />
        <Name>{name}</Name>
      </Wrapper>
    </Container>
  );
};

export default Category;
