import React from "react";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import Menu from "../../components/Menu";
import Header from "../../components/Header";
import InputText from "../../components/InputText";
import Title from "../../components/Title";
import Botao from "../../components/Button";
import AngryCheckbox from "../../components/AngrySunCheckbox";
import InputSelect from "../../components/InputSelect";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { CadastroDiv, CadastroForm, DatePickerLabel } from "./styles";
import { UserContext } from "../../context/User";

function CadastroGeracao() {
	const { usuarioLogado } = useContext(UserContext);
	const baseURLUnidades = "http://localhost:3333/unidades?usuario=";
	const baseURLUnidade = "http://localhost:3333/unidades/";

	const [unidades, setUnidades] = useState([]);
	const [unidadeID, setUnidadeID] = useState("");
	const [anoMes, setAnoMes] = useState(new Date().toISOString().split("-").slice(0, 2).join("-"));
	const [geracao, setGeracao] = useState("");

	useEffect(() => {
		window.scrollTo(0, 0);

		async function getUnidades() {
			try {
				const response = await axios.get(baseURLUnidades + usuarioLogado);
				setUnidades(response.data);
				setUnidadeID(response.data[0].id);
			} catch (error) {
				toast.error("Nenhuma unidade cadastrada!");
			}
		}

		getUnidades();
	}, [usuarioLogado]);

	async function criarGeracao(event) {
		event.preventDefault();

		const novaGeracao = {};
		novaGeracao[anoMes] = geracao;

		try {
			let response = await axios.get(baseURLUnidade + unidadeID);

			Object.assign(response.data.geracao, novaGeracao);

			await axios.put(baseURLUnidade + unidadeID, response.data);
			toast.success("Geração cadastrada!");
		} catch (error) {
			toast.error("Erro no servidor!");
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
							values={unidades}
							onChange={(event) => {
								setUnidadeID(unidades[event.target.options.selectedIndex].id);
							}}
						/>
						<DatePickerLabel>Selecione o mês de Geração</DatePickerLabel>
						<DatePicker
							value={anoMes}
							onChange={(date) =>
								setAnoMes(date.toISOString().split("-").slice(0, 2).join("-"))
							}
							dateFormat="yyyy-MM"
							showMonthYearPicker
						/>
						<InputText
							label="Total kWh gerado"
							width="50%"
							placeholder="Digite a geração do mês (kWh)"
							onChange={(event) => {
								setGeracao(parseInt(event.target.value));
							}}
							type="number"
							min="0"
						/>
						<Botao type="submit">Adicionar</Botao>
					</CadastroForm>
				</CadastroDiv>
			</div>
		</>
	);
}

export default CadastroGeracao;
