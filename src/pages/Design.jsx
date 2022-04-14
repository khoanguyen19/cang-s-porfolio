import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import ImageGallery from "../components/ImageGallery";

const Container = styled.div``;

const Design = () => {
  return (
    <Container>
      <Navbar />
      <Intro />
      <ImageGallery />
    </Container>
  );
};

export default Design;
