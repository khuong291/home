import * as React from "react";
import styled from "styled-components";
import * as Colors from "../constants/colors";
import CompanyProjects from "./CompanyProjects";
import Libraries from "./Libraries";
import PersonalProjects from "./PersonalProjects";
import ProgrammingArticles from "./ProgramingArticles";
import { Tabs } from "antd";

const { TabPane } = Tabs;

const WorkTabContainer = () => (
  <Container>
    <Tabs defaultActiveKey="1">
      <TabPane tab="Company Projects" key="1">
        <CompanyProjects />
      </TabPane>
      <TabPane tab="Personal Projects" key="2">
        <PersonalProjects />
      </TabPane>
      <TabPane tab="Self-Libraries" key="3">
        <Libraries />
      </TabPane>
      <TabPane tab="Programming Articles" key="4 ">
        <ProgrammingArticles />
      </TabPane>
    </Tabs>
  </Container>
);

const Container = styled.div`
  .ant-tabs-nav {
    font-size: 1.5em;
    color: ${Colors.textTitle};
    text-align: left;
  }
  .ant-tabs-tab-active {
    color: ${Colors.textTitle};
    font-weight: bold;
  }
`;

export default WorkTabContainer;
