import styled from "styled-components";

export const InputButton = styled.button`
	width: 100%;
	height: 40px;
	margin: 10px;
	padding: 10px;
	border: 0;
	border-radius: 5px;
	background-color: #34568b;
	color: white;
	font-size: 85%;

	&:hover {
		background-color: tomato;
		transition: all 0.2s ease-in-out;
		transform: scale(1.1);
	}
`;
