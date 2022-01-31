import styled from "styled-components";

export const HeaderStyle = styled.div`
	width: 100%;
	font-size: 30px;
	font-weight: bold;
	padding: 30px;
	background-color: white;
	border-bottom: solid #e5e5e5 1px;

	position: fixed;
	z-index: 1;
	top: 0;
	left: 300px;
	overflow-x: hidden;
	transition: 0.5s;
`;

export const LogoutButton = styled.button`
	position: fixed;
	z-index: 1;
	top: 25px;
	right: 30px;
	overflow-x: hidden;
	transition: 0.5s;

	width: 80px;
	height: 40px;
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
