import React from "react";
import { useState, useContext } from "react";
import { InputButton } from "./styles";
import { Navigate } from "react-router-dom";
import { UnidadeID } from "../../context/UnidadeID";

function BotaoEdita({ value, children }) {
	const { setUnidadeID } = useContext(UnidadeID);

	const [clickEdit, setClickEdit] = useState(false);

	function editaUnidade() {
		setUnidadeID(value);
		setClickEdit(true);
	}

	return (
		<>
			{clickEdit && <Navigate to={"/editaunidade"} replace={true} />}
			<InputButton onClick={editaUnidade}>{children}</InputButton>
		</>
	);
}

export default BotaoEdita;
