import * as React from "react";
import styled from "styled-components";
import * as Colors from "../constants/colors";

const PersonalProjects = () => (
  <Container>
    <ProjectDiv>
      <img height="42" src="pettrend.png" />
      <Title href="http://pettrend.vn">PetTrend (Swift)</Title>
    </ProjectDiv>
    <ProjectDiv>
      <img height="42" src="reactjs.png" />
      <Title href="https://khuong291.github.io/MovieHD">
        MovieHD (ReactJS + NodeJS)
      </Title>
    </ProjectDiv>
    <ProjectDiv>
      <img height="42" src="guessit.jpg" />
      <Title href="https://apps.apple.com/us/app/guess-it-word-picture-puzzle/id1257126099">
        Guess It - Word Picture Puzzle (Swift + Firebase)
      </Title>
    </ProjectDiv>
    <ProjectDiv>
      <img height="42" src="giothanhle.jpg" />
      <Title href="https://apps.apple.com/us/app/giothanhle/id858577738">
        GioThanhle (Swift + NodeJS)
      </Title>
    </ProjectDiv>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  background-color: white;
  padding: 15px 30px;
  border-radius: 8px;
`;

const Title = styled.a`
  @media (max-width: 425px) {
    font-size: 10px;
    margin-top: 15px;
  }

  font-size: 20px;
  color: ${Colors.textTitle};
  font-weight: bold;
  text-align: left;
  margin-left: 10px;
`;

const ProjectDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

export default PersonalProjects;
