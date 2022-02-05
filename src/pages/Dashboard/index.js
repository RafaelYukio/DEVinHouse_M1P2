import React from "react";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import Menu from "../../components/Menu";
import Header from "../../components/Header";
import Title from "../../components/Title";
import Card from "../../components/Card";
import AngryCheckbox from "../../components/AngrySunCheckbox";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Cards, LineDiv } from "./styles";
import { UserContext } from "../../context/User";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Tooltip,
	Legend
);

function Dashboard() {
	const { usuarioLogado } = useContext(UserContext);
	const baseURL = "http://localhost:3333/unidades?usuario=";

	const [unidades, setUnidades] = useState([]);
	const [unidadesAtivas, setUnidadesAtivas] = useState(0);
	const [unidadesInativas, setUnidadesInativas] = useState(0);
	const [mediaEnergia, setMediaEnergia] = useState(0);
	const [geracoes, setGeracoes] = useState({
		labels: [
			"Jan",
			"Fev",
			"Mar",
			"Abr",
			"Mai",
			"Jun",
			"Jul",
			"Ago",
			"Set",
			"Out",
			"Nov",
			"Dez",
		],
		datasets: [],
	});

	function dadosGrafico(data) {
		function mediaGeracao() {
			const valoresGeracao = [].concat.apply(
				[],
				data.map((unidade) => Object.values(unidade.geracao))
			);

			const numerosGeracao = valoresGeracao.filter((number) => number);

			let mediaGeracao =
				numerosGeracao.reduce(
					(previousValue, currentValue) => previousValue + currentValue,
					0
				) / numerosGeracao.length;

			mediaGeracao = mediaGeracao || 0;

			setMediaEnergia(Math.round(mediaGeracao));

			return Array(12).fill(Math.round(mediaGeracao));
		}

		function verificaBoolean(dado) {
			let estado = "";

			if (dado === true) {
				estado = "Ativo";
			} else if (dado === false) {
				estado = "Inativo";
			} else {
				estado = dado;
			}

			return estado;
		}

		function somaGeracoes() {
			const arrayGeracoes = data.map((unidade) =>
				Object.values(unidade.geracao)
			);
			const novaArray = [];

			arrayGeracoes.forEach((subArray) => {
				subArray.forEach((num, index) => {
					if (novaArray[index]) {
						novaArray[index] += num;
					} else {
						novaArray[index] = num;
					}
				});
			});

			return novaArray;
		}

		const dadosGeracoes = {
			...geracoes,
			datasets: data
				.map((unidade) => ({
					spanGaps: true,
					pointStyle: "crossRot",
					lineTension: 0.3,
					label: unidade.apelido + " (" + verificaBoolean(unidade.status) + ")",
					data: Object.values(unidade.geracao),
					fill: false,
					borderColor: "#" + Math.floor(Math.random() * 16777215).toString(16),
					borderWidth: 1,
				}))
				.concat({
					spanGaps: true,
					pointStyle: "circle",
					lineTension: 0.3,
					label: "Geracão Total",
					data: somaGeracoes(),
					fill: true,
					borderColor: "#" + Math.floor(Math.random() * 16777215).toString(16),
					borderWidth: 4,
				})
				.concat({
					spanGaps: true,
					pointStyle: "circle",
					lineTension: 0.3,
					label: "Geracão Média",
					data: mediaGeracao(),
					fill: true,
					borderColor: "#" + Math.floor(Math.random() * 16777215).toString(16),
					borderWidth: 4,
				}),
		};

		return dadosGeracoes;
	}

	useEffect(() => {
		window.scrollTo(0, 0);

		async function getUnidades() {
			try {
				const response = await axios.get(baseURL + usuarioLogado);
				setUnidades(response.data);
				setGeracoes(dadosGrafico(response.data));
				setUnidadesAtivas(
					response.data
						.map((unidade) => unidade.status)
						.filter((statusUnidade) => statusUnidade === true).length
				);
				setUnidadesInativas(
					response.data
						.map((unidade) => unidade.status)
						.filter((statusUnidade) => statusUnidade === false).length
				);

				toast.success("Dados atualizados do servidor!");
			} catch (error) {
				toast.error("Erro no servidor!");
			}
		}

		getUnidades();
	}, [usuarioLogado]);

	return (
		<>
			<Menu />
			<Header name="Dashboard" />
			<AngryCheckbox />
			<div className="page">
				<Title>Dados das Unidades</Title>
				<Cards>
					<Card name="Total de Unidades" value={unidades.length} />
					<Card name="Unidades Ativas" value={unidadesAtivas} />
					<Card name="Unidades Inativas " value={unidadesInativas} />
					<Card name="Geração Média" value={mediaEnergia + " kWh"} />
				</Cards>
				<LineDiv>
					<Line data={geracoes} />
				</LineDiv>
			</div>
		</>
	);
}

export default Dashboard;
