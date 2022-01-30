import React from "react";
import { Link } from "react-router-dom";
import { LiBotao } from "./styles";

function MenuBotao({ buttonPath, name }) {
	return (
		<LiBotao disabled={true}>
			<Link to={"/" + buttonPath}>{name}</Link>
		</LiBotao>
	);
}

export default React.memo(MenuBotao);
