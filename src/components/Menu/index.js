import React from "react";
import { useEffect, useContext, useState } from "react";
import MenuBotao from "../MenuButton";
import { MenuStyle, MenuImg, MenuTitle } from "./styles";
import { AngrySun } from "../../context/AngrySun";

function Menu() {
	const { angrySun } = useContext(AngrySun);
	const [imagem, setImagem] = useState("logodev.png");

	useEffect(() => {
		angrySun ? setImagem("angrysun1.png") : setImagem("logodev.png");
	}, [angrySun]);

	return (
		<MenuStyle>
			<MenuImg src={require("../../" + imagem)} alt="Sun" angry={angrySun} />
			<MenuTitle></MenuTitle>
			<ul>
				<MenuBotao buttonPath="dashboard" name="Dashboard" />
				<MenuBotao buttonPath="unidades" name="Unidades" />
				<MenuBotao buttonPath="cadastrogeracao" name="Cadastro de Geração" />
			</ul>
		</MenuStyle>
	);
}

export default React.memo(Menu);
