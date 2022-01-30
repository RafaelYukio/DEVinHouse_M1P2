import styled from "styled-components";

export const ListTable = styled.table`
	border-radius: 15px;
	overflow: hidden;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
		rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

export const ListTr = styled.tr`
	height: 50px;
	vertical-align: middle;
	background-color: white;
  	border-bottom: solid #dcdcdc 1px;
  	&:last-child {
    border-bottom: 0;

`;

export const ListTh = styled.th`
	padding: 10px 40px;
	text-align: start;
	vertical-align: middle;
	font-size: 85%;
	font-weight: bold;
	background-color: #dcdcdc;
`;

export const ListTd = styled.td`
	font-size: 85%;
	padding: 10px 40px;
	text-align: start;
	vertical-align: middle;
`;
