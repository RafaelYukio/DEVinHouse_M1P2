import React from "react";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../context/User";
import { UnidadeID } from "../../context/UnidadeID";
import axios from "axios";
import Menu from "../../components/Menu";
import Header from "../../components/Header";
import Title from "../../components/Title";
import List from "../../components/List";
import MenuBotao from "../../components/MenuButton";
import AngryCheckbox from "../../components/AngrySunCheckbox";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { UnidadesDivButton } from "./styles";

function Unidades() {
	const { usuarioLogado } = useContext(UserContext);
	const { unidadeID } = useContext(UnidadeID);

	const baseURL = "http://localhost:3333/unidades";

	const [unidades, setUnidades] = useState([]);

	useEffect(() => {
		window.scrollTo(0, 0);

		async function getUnidades() {
			try {
				const response = await axios.get(baseURL + "?usuario=" + usuarioLogado);
				setUnidades(response.data);
				toast.success("Dados atualizados do servidor!");
			} catch (error) {
				toast.error("Erro no servidor!");
			}
		}

		getUnidades();
	}, [usuarioLogado, unidadeID]);

	return (
		<>
			<Menu />
			<Header name="Unidades" />
			<AngryCheckbox />
			<div className="page">
				<Title>Lista de Unidades</Title>
				<List
					tableTitles={["ID", "Apelido", "Local", "Marca", "Modelo", "Status"]}
					unidades={unidades}
					dados={["id", "apelido", "local", "marca", "modelo", "status"]}
				/>
				<UnidadesDivButton>
					<MenuBotao
						buttonPath="cadastrounidade"
						name="Cadastro de Unidade Geradora"
					/>
				</UnidadesDivButton>
			</div>
		</>
	);
}

export default Unidades;
