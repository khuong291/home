import * as React from "react";
import styled from "styled-components";
import * as Colors from "../constants/colors";

const AboutContainer = () => (
	<Container>
		<Title>About Me</Title>
		<Description>
			Hello! I am Kenny and I am a frontend developer working on web and mobile
			applications. I have been developing professionally for 4 years. I have a
			deep understanding of many technical subjects. I can contribute many
			things from different roles like backend, frontend or mobile. Courteous
			and enthusiastic, I am interested in IT and everything in its orbit.
		</Description>
	</Container>
);

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: left;
	background-color: white;
	padding: 15px 30px 30px 30px;
	border-radius: 8px;
`;

const Title = styled.h1`
	font-size: 1.5em;
	color: ${Colors.textTitle};
	font-weight: bold;
	text-align: left;
`;

const Description = styled.h2`
	font-size: 1.2em;
	color: ${Colors.textDescription};
	text-align: left;
	font-weight: lighter;
`;

export default AboutContainer;
