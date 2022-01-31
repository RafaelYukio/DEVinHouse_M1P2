import React from "react";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import Menu from "../../components/Menu";
import Header from "../../components/Header";
import InputText from "../../components/InputText";
import Title from "../../components/Title";
import InputCheckbox from "../../components/InputCheckbox";
import Botao from "../../components/Button";
import AngryCheckbox from "../../components/AngrySunCheckbox";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import { CadastroDiv, CadastroForm } from "./styles";
import { UserContext } from "../../context/User";

function CadastroUnidade() {
	const { usuarioLogado } = useContext(UserContext);

	const [apelido, setApelido] = useState("");
	const [local, setLocal] = useState("");
	const [marca, setMarca] = useState("");
	const [modelo, setModelo] = useState("");
	const [status, setStatus] = useState(true);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	async function criarUnidade(event) {
		event.preventDefault();

		try {
			await axios.post("http://localhost:3333/unidades", {
				usuario: usuarioLogado,
				id: uuidv4(),
				apelido: apelido,
				local: local,
				marca: marca,
				modelo: modelo,
				status: status,
				geracao: {
					"2022-01": null,
					"2022-02": null,
					"2022-03": null,
					"2022-04": null,
					"2022-05": null,
					"2022-06": null,
					"2022-07": null,
					"2022-08": null,
					"2022-09": null,
					"2022-10": null,
					"2022-11": null,
					"2022-12": null,
				},
			});

			toast.success("Unidade cadastrada!");
		} catch (error) {
			toast.error("Erro no servidor!");
		}
	}

	const handleClick = () => setStatus(!status);

	return (
		<>
			<Menu />
			<Header name="Cadastro de nova Unidade" />
			<AngryCheckbox />
			<div className="page">
				<Title>Preencher dados da nova Unidade</Title>
				<CadastroDiv>
					<CadastroForm onSubmit={criarUnidade}>
						<InputText
							label="Apelido"
							width="50%"
							placeholder="Digite um apelido"
							onChange={(event) => {
								setApelido(event.target.value);
							}}
						/>
						<InputText
							label="Local"
							width="50%"
							placeholder="Digite o local"
							onChange={(event) => {
								setLocal(event.target.value);
							}}
						/>
						<InputText
							label="Marca"
							width="50%"
							placeholder="Digite a marca"
							onChange={(event) => {
								setMarca(event.target.value);
							}}
						/>
						<InputText
							label="Modelo"
							width="50%"
							placeholder="Digite o modelo"
							onChange={(event) => {
								setModelo(event.target.value);
							}}
						/>
						<InputCheckbox
							label="Ativo"
							onChange={() => {
								handleClick();
							}}
							checked={status}
						/>
						<Botao type="submit">Cadastrar</Botao>
					</CadastroForm>
				</CadastroDiv>
			</div>
		</>
	);
}

export default CadastroUnidade;
