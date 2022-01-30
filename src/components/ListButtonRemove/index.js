import React from "react";
import { useContext } from "react";
import { InputButton } from "./styles";
import { UnidadeID } from "../../context/UnidadeID";
import axios from "axios";

function BotaoRemove({ value, children }) {
	const baseURL = "http://localhost:3333/unidades/";

	const { setUnidadeID } = useContext(UnidadeID);

	async function deletaUnidade() {
		setUnidadeID(value);

		try {
			await axios.delete(baseURL + value);
			setUnidadeID("");
		} catch (error) {
			alert("Erro no servidor");
			setUnidadeID("");
		}
	}

	return <InputButton onClick={deletaUnidade}>{children}</InputButton>;
}

export default BotaoRemove;
