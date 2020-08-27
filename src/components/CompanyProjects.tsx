import * as React from "react";
import styled from "styled-components";
import * as Colors from "../constants/colors";

const CompanyProjectsContainer = () => (
  <Container>
    <ProjectDiv>
      <img height="42" src="singaporegp.png" />
      <Title href="https://apps.apple.com/sg/app/singapore-gp/id518276170">
        SingaporeGP (Swift)
      </Title>
    </ProjectDiv>
    <ProjectDiv>
      <img height="42" src="mbccs.png" />
      <Title href="https://apps.apple.com/us/app/marina-bay-cruise-centre/id1457518741">
        Marina Bay Cruise Center Singapore (Swift)
      </Title>
    </ProjectDiv>
    <ProjectDiv>
      <img height="42" src="99sme.jpg" />
      <Title href="https://99smeb2b.com">
        99SME B2B (ReactJS + Python Flask)
      </Title>
    </ProjectDiv>
    <ProjectDiv>
      <img height="42" src="sourcesage.jpg" />
      <Title href="https://dashboard.sourcesage.co">
        SourceSage (ReactJS + Python Flask)
      </Title>
    </ProjectDiv>
    <ProjectDiv>
      <img height="42" src="360live.png" />
      <Title href="https://apps.apple.com/vn/app/360live/id1191737321?mt=8">
        360Live (Swift)
      </Title>
    </ProjectDiv>
    <ProjectDiv>
      <img height="42" src="ryde.png" />
      <Title href="https://apps.apple.com/sg/app/ryde-ride-hailing/id979806982">
        Ryde Sharing (ObjectiveC)
      </Title>
    </ProjectDiv>
    <ProjectDiv>
      <img height="42" src="sistic.jpg" />
      <Title href="https://apps.apple.com/us/app/sistic/id500601166">
        Sistic (ObjectiveC)
      </Title>
    </ProjectDiv>
    <ProjectDiv>
      <img height="42" src="odibly.png" />
      <Title href="https://www.linkedin.com/company/odibly/about/">
        Odibly (Swift)
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

export default CompanyProjectsContainer;
