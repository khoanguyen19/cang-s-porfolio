import React, { useEffect, useState } from "react";
import styled from "styled-components";
import cangsLogo from "../assets/images/logo.png";
import "../App.css";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: rgba(25, 25, 25, 0.6);
  backdrop-filter: blur(2px);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  transition: 0.3s all ease;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 52px;
`;

const Logo = styled.div`
  cursor: pointer;
  display: flex;
`;

const Img = styled.img`
  width: 60px;
`;

const Menu = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const MenuItem = styled.div`
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  border-bottom: 2px solid transparent;
  padding-bottom: 2px;
  text-decoration: none;
  &:hover {
    color: #f0c3c3;
    border-bottom-color: #f0c3c3;
    transition: all ease 0.3s;
  }
`;

// const Text = styled.span`
//   border-bottom: 2px solid transparent;
//   padding-bottom: 2px;
//   &:hover {
//     color: #f0c3c3;
//     border-bottom-color: #f0c3c3;
//     transition: all ease 0.3s;
//   }
// `;

const Navbar = () => {
  const [backgroundChange, setBackgroundChange] = useState(false);

  useEffect(() => {
    const changeNavBackground = (e) => {
      const currentScrollY = window.scrollY;
      if (currentScrollY === 0) {
        setBackgroundChange(false);
      } else {
        setBackgroundChange(true);
      }
    };

    window.addEventListener("scroll", changeNavBackground, { passive: true });
    return () => window.removeEventListener("scroll", changeNavBackground);
  }, [backgroundChange]);

  return (
    <Container className={backgroundChange ? "navbar colorChange" : "navbar"}>
      <Wrapper>
        <Logo>
          <Link to="/">
            <Img src={cangsLogo} />
          </Link>
        </Logo>
        <Menu>
          <MenuItem>
            <StyledLink to="/video">Video</StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink to="/design">Design</StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink to="/motionDesign">Motion Design</StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink to="3d">3D</StyledLink>
          </MenuItem>
        </Menu>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
