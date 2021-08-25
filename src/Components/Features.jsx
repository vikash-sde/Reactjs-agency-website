import React from "react";
import styled from "styled-components";
import App from "../img/app.png";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  width: 50%;
  margin: 30px 0;
`;
const Image = styled.img`
  width: 80%;
`;
const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.span`
  font-size: 70px;
`;
const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: grey;
  margin-top: 20px;
`;
const Desc = styled.p`
  color: #777;
  margin-top: 30px;
`;
const Button = styled.button`
  width: 150px;
  border: none;
  padding: 15px;
  background-color: darkblue;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 30px;
`;

const Features = () => {
  return (
    <Container>
      <Left>
        <Image src={App}></Image>
      </Left>
      <Right>
        <Title>
          <b>Good</b> design
          <br />
          <b>Good</b> business
        </Title>
        <SubTitle>We know that good design means good business.</SubTitle>
        <Desc>
          We help our clients succeed by creating brand identities, digital
          experiences, and print materials that communicate clearly, achieve
          marketing goals, and look fantastic.
        </Desc>

        <Button>Learn More</Button>
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

export default Features;
