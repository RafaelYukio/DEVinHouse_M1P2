import React from "react";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import Menu from "../../components/Menu";
import Header from "../../components/Header";
import InputText from "../../components/InputText";
import Title from "../../components/Title";
import Botao from "../../components/Button";
import AngryCheckbox from "../../components/AngrySunCheckbox";
import { CadastroDiv, CadastroForm } from "./styles";
import { UserContext } from "../../context/User";
import InputSelect from "../../components/InputSelect";

function CadastroGeracao() {
	const { usuarioLogado } = useContext(UserContext);
	const baseURLUnidades = "http://localhost:3333/unidades?usuario=";
	const baseURLUnidade = "http://localhost:3333/unidades/";

	const [unidades, setUnidades] = useState([]);
	const [unidadeID, setUnidadeID] = useState("");
	const [mesAno, setMesAno] = useState("");
	const [geracao, setGeracao] = useState("");

	useEffect(() => {
		async function getUnidades() {
			try {
				const response = await axios.get(baseURLUnidades + usuarioLogado);
				setUnidades(response.data);
				setUnidadeID(response.data[0].id);
			} catch (error) {
				alert("Nenhuma unidade cadastrada");
			}
		}

		getUnidades();
	}, [usuarioLogado]);

	async function criarGeracao(event) {
		event.preventDefault();

		const novaGeracao = {};
		novaGeracao[mesAno] = geracao;

		try {
			let response = await axios.get(baseURLUnidade + unidadeID);

			Object.assign(response.data.geracao, novaGeracao);

			await axios.put(baseURLUnidade + unidadeID, response.data);
		} catch (error) {
			alert("Erro no servidor");
		}
	}

	return (
		<>
			<Menu />
			<Header name="Cadastro de nova Geração" />
			<AngryCheckbox />
			<div className="page">
				<Title>Preencher novo dado de Geração</Title>
				<CadastroDiv>
					<CadastroForm onSubmit={criarGeracao}>
						<InputSelect
							label="Unidade"
							values={unidades.map((unidade) => {
								return unidade.apelido;
							})}
							onChange={(event) => {
								setUnidadeID(unidades[event.target.options.selectedIndex].id);
							}}
						/>
						<InputText
							label="Mês/ano"
							width="50%"
							onChange={(event) => {
								setMesAno(event.target.value);
							}}
							type="month"
						/>
						<InputText
							label="Total kWh gerado"
							width="50%"
							placeholder="Digite a geração do mês (kWh)"
							onChange={(event) => {
								setGeracao(parseInt(event.target.value));
							}}
							type="number"
						/>
						<Botao type="submit">Adiciona</Botao>
					</CadastroForm>
				</CadastroDiv>
			</div>
		</>
	);
}

export default CadastroGeracao;
