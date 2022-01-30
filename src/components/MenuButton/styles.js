import styled from "styled-components";

export const LiBotao = styled.li`
	width: 220px;
	height: 40px;
	display: table;
	margin: 10px;
	padding: 10px;
	border-radius: 5px;
	background-color: #34568b;
	color: white;
	font-size: 18px;

	&:hover {
		background-color: tomato;
		transition: all 0.2s ease-in-out;
		transform: scale(1.1);
	}

	> a,
	a:hover,
	a:focus,
	a:active {
		text-decoration: none;
		color: inherit;
		display: table-cell;
		text-decoration: none;
		text-align: center;
		vertical-align: middle;
	}
`;
