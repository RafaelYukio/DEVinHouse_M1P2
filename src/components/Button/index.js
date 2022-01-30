import React from "react";
import { InputButton } from "./styles";

function Botao({ value, onClick, children }) {
	return (
		<InputButton value={value} onClick={onClick}>
			{children}
		</InputButton>
	);
}

export default Botao;
