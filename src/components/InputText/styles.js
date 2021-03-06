import styled from "styled-components";

export const InputLabel = styled.label`
	width: 100%;
	margin: 15px 0;
	display: flex;
	flex-direction: column;
	font-weight: bold;
	font-size: 20px;
	color: #212529;
`;

export const InputTextValue = styled.input`
	max-width: 100%;
	height: 24px;
	margin: 10px 0;
	border-radius: 10px;
	outline: none;
	border: 1px solid #ced4da;
	padding: 10px;

	&:focus {
		border-color: #ec6d08;
	}
`;
