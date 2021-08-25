import React from "react";
import styled, { css } from "styled-components";
import Features from "./Components/Features";
import Intro from "./Components/Intro";
import Navbar from "./Components/Navbar";
import Service from "./Components/Service";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const IntroShape = styled.div`
  clip-path: polygon(100% 0%, 72% 0%, 55% 100%, 100% 100%);
  background-color: crimson;
  ${Shape}
`;

const FeaturesShape = styled.div`
  clip-path: polygon(0% 0%, 55% 0%, 33% 100%, 0% 100%);
  background-color: pink;
  ${Shape}
`;

const ServiceShape = styled.div`
  clip-path: polygon(0% 0%, 33% 0%, 33% 100%, 0% 100%);
  background-color: crimson;
  ${Shape}
`;

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <IntroShape />
      </Container>
      <Container>
        <Features />
        <FeaturesShape />
      </Container>
      <Container>
        <Service />
        <ServiceShape />
      </Container>
    </>
  );
}

export default App;
