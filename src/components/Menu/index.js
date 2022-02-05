import React from "react";
import { useEffect, useContext, useState } from "react";
import MenuBotao from "../MenuButton";
import { MenuStyle, MenuUser, MenuImg, MenuTitle } from "./styles";
import { AngrySun } from "../../context/AngrySun";
import { UserContext } from "../../context/User";

function Menu() {
	const { usuarioLogado } = useContext(UserContext);
	const { angrySun } = useContext(AngrySun);
	const [imagem, setImagem] = useState("logodev.png");

	useEffect(() => {
		angrySun ? setImagem("angrysun1.png") : setImagem("logodev.png");
	}, [angrySun, usuarioLogado]);

	return (
		<MenuStyle>
			<MenuUser>
				<span>Usuário:</span>
				<span>{usuarioLogado}</span>
			</MenuUser>
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
