import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import cangsAvatar from "../assets/images/avatar.png";
import { init } from "ityped";
import { ArrowRight } from "@styled-icons/bootstrap/ArrowRight";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  background-image: url(${cangsAvatar});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Intro = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;

const IntroWrapper = styled.div`
  display: flex;
  height: 40%;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px;
`;

const Greet = styled.h2`
  font-size: 28px;
  font-weight: 400;
`;

const Text = styled.span`
  color: #cdef13;
  font-size: 36px;
  font-weight: 600;
`;

const Name = styled.h2`
  font-size: 60px;
  font-weight: 700;
`;
const Title = styled.h3`
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 15px;
`;

const ToAbout = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  color: #cdef13;
  font-size: 20px;
  font-weight: 600;
  padding: 2px 0;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: all ease 0.3s;
  &:hover {
    border-bottom: 2px solid #cdef13;
  }
`;

const Icon = styled.span`
  margin-left: 4px;
`;

const About = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1000,
      strings: ["Video Editor", "Content Creator"],
    });
  });

  return (
    <Container>
      <Intro>
        <IntroWrapper>
          <Greet>
            <Text>Hello</Text>, My name is
          </Greet>
          <Name>Quy Nguyen</Name>
          <Title>
            Freelance <Text ref={textRef}></Text>
          </Title>
          <ToAbout>
            About me
            <Icon>
              <ArrowRight size="20" fill="#cdef13" />
            </Icon>
          </ToAbout>
        </IntroWrapper>
      </Intro>
    </Container>
  );
};

export default About;
