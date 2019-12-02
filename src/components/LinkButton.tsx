import * as React from "react";
import { Icon } from "react-fa";
import styled from "styled-components";
import * as Colors from "../constants/colors";

interface Props {
  link: string;
  imageName: string;
}

const LinkButton: React.SFC<Props> = props => (
  <a href={props.link}>
    <LinkIcon size="2x" name={props.imageName} />
  </a>
);

const LinkIcon = styled(Icon)`
  color: ${Colors.midGray};
  margin: 10px 10px 0 0;
  text-align: center;
  :hover {
    color: ${Colors.base};
  }
`;

export default LinkButton;
