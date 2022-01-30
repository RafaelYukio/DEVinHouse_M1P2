import styled from "styled-components";

export const InputLabel = styled.label`
	width: 100%;
	margin: 5px 0;
	display: flex;
	align-items: center;
	font-weight: bold;
	font-size: 20px;
	color: #212529;
`;

export const InputCheckboxValue = styled.input`
	max-width: 100%;
	margin: 0 10px;
	height: 24px;
	border-radius: 10px;
	outline: none;
	border: 1px solid #ced4da;
	f &:focus {
		border-color: #ec6d08;
	}
`;
