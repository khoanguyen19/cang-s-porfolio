import Home from "./pages/Home";
import Design from "./pages/Design";
import Video from "./pages/Video";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

const Container = styled.div`
  background-color: #191919;
  height: 100000px;
  position: relative;
`;

function App() {
  return (
    <BrowserRouter>
      <Container>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/design" element={<Design />} />
            <Route path="/video" element={<Video />} />
          </Routes>
        </ScrollToTop>
      </Container>
    </BrowserRouter>
  );
}

export default App;
