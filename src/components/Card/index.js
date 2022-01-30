import React from "react";
import { CardDiv, CardH1, SpandH1 } from "./styles";

function Card({ name, value }) {
	return (
		<CardDiv>
			<CardH1>{name}</CardH1>
			<SpandH1>{value}</SpandH1>
		</CardDiv>
	);
}

export default Card;
