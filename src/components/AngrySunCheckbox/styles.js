import styled from "styled-components";

export const InputLabel = styled.label`
	width: 120px;
	height: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: bold;
	font-size: 16px;
	color: #212529;

	position: fixed;
	z-index: 1;
	top: 30px;
	right: 110px;
	overflow-x: hidden;
`;

export const InputCheckboxValue = styled.input`
	max-width: 100%;
	margin: 0 10px;
	height: 24px;
	border-radius: 10px;
	outline: none;
	border: 1px solid #ced4da;

	&:focus {
		border-color: #ec6d08;
	}
`;
