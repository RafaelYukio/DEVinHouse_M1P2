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
import { CadastroDiv, CadastroForm } from "./styles";
import { UnidadeID } from "../../context/UnidadeID";

function EditaUnidade() {
	const { unidadeID } = useContext(UnidadeID);

	const baseURL = "http://localhost:3333/unidades/";

	const [dadosUnidade, setdadosUnidade] = useState("");
	const [apelido, setApelido] = useState("");
	const [local, setLocal] = useState("");
	const [marca, setMarca] = useState("");
	const [modelo, setModelo] = useState("");
	const [status, setStatus] = useState(true);

	useEffect(() => {
		window.scrollTo(0, 0);

		async function getUnidades() {
			try {
				let response = await axios.get(baseURL + unidadeID);
				setdadosUnidade(response.data);
				setApelido(response.data.apelido);
				setLocal(response.data.local);
				setMarca(response.data.marca);
				setModelo(response.data.modelo);
				setStatus(response.data.status);
				toast.success("Unidade atualizada!");
			} catch (error) {
				toast.error("Erro no servidor!");
			}
		}

		getUnidades();
	}, []);

	async function editaUnidade(event) {
		event.preventDefault();

		const novosDados = {
			apelido: apelido,
			local: local,
			marca: marca,
			modelo: modelo,
			status: status,
		};

		try {
			await axios.put(
				baseURL + unidadeID,
				Object.assign(dadosUnidade, novosDados)
			);
		} catch (error) {
			alert("Erro no servidor");
		}
	}

	const handleClick = () => setStatus(!status);

	return (
		<>
			<Menu />
			<Header name="Edição de Unidade" />
			<AngryCheckbox />
			<div className="page">
				<Title>Editar Unidade</Title>
				<CadastroDiv>
					<CadastroForm onSubmit={editaUnidade}>
						<InputText
							label="Apelido"
							value={apelido}
							width="50%"
							placeholder="Edite o apelido"
							onChange={(event) => {
								setApelido(event.target.value);
							}}
						/>
						<InputText
							label="Local"
							value={local}
							width="50%"
							placeholder="Edite o local"
							onChange={(event) => {
								setLocal(event.target.value);
							}}
						/>
						<InputText
							label="Marca"
							value={marca}
							width="50%"
							placeholder="Edite a marca"
							onChange={(event) => {
								setMarca(event.target.value);
							}}
						/>
						<InputText
							label="Modelo"
							value={modelo}
							width="50%"
							placeholder="Edite o modelo"
							onChange={(event) => {
								setModelo(event.target.value);
							}}
						/>
						<InputCheckbox
							label="Ativo"
							checked={status}
							onChange={() => {
								handleClick();
							}}
						/>
						<Botao type="submit">Salvar</Botao>
					</CadastroForm>
				</CadastroDiv>
			</div>
		</>
	);
}

export default EditaUnidade;
