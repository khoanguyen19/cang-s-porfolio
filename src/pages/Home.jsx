import React from "react";
// import styled from "styled-components";
import About from "../components/About";
import Navbar from "../components/Navbar";

// const Container = styled.div`
//   background-color: #191919;
//   height: 100000px;
//   position: relative;
// `;

const Home = () => {
  return (
    <div>
      <Navbar />
      <About />
    </div>
  );
};

export default Home;
