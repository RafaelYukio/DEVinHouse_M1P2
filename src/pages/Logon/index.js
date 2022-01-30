import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { UserContext } from "../../context/User";
import { AngrySun } from "../../context/AngrySun";
import axios from "axios";
import { Navigate } from "react-router-dom";
import InputText from "../../components/InputText";
import Botao from "../../components/Button";
import AngryCheckbox from "../../components/AngrySunCheckbox";
import {
	LogonImg,
	LogonDiv,
	LogonFormDiv,
	LogonFormImg,
	LogonForm,
	LogonSpanError,
	LogonFormTitle,
} from "./styles";

function Logon() {
	const baseURL = "http://localhost:3333/usuarios?login=";

	const validaEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

	const { setUsuarioLogado } = useContext(UserContext);
	const { angrySun } = useContext(AngrySun);

	const [login, setLogin] = useState("");
	const [senha, setSenha] = useState("");
	const [erroLogin, setErroLogin] = useState("");
	const [autenticador, setAutenticador] = useState(false);
	const [imagem, setImagem] = useState("logodev.png");

	function validateEmail() {
		if (validaEmail.test(login)) {
			setErroLogin("");
		} else {
			setErroLogin("Digite um e-mail válido");
		}
	}

	async function handleSubmit(event) {
		event.preventDefault();
		try {
			const response = await axios.get(baseURL + login);
			if (response.data[0].senha === senha) {
				setUsuarioLogado(login);
				setAutenticador(true);
			} else {
				setAutenticador(false);
				alert("Senha inválida");
			}
		} catch (error) {
			alert("Email inválido");
		}
	}

	useEffect(() => {
		angrySun ? setImagem("angrysun1.png") : setImagem("logodev.png");
	}, [angrySun]);

	return (
		<>
			{autenticador && <Navigate to={"/dashboard"} replace={true} />}
			<LogonImg src={require("../../photovoltaic.jpg")} alt="Photovoltaic" />
			<AngryCheckbox />
			<LogonDiv>
				<LogonFormDiv>
					<LogonFormImg
						src={require("../../" + imagem)}
						alt="Photovoltaic"
						angry={angrySun}
					/>
					<LogonFormTitle>Seja bem vindo!</LogonFormTitle>
					<LogonForm onSubmit={handleSubmit}>
						<InputText
							placeholder="Digite seu e-mail"
							onChange={(event) => {
								setLogin(event.target.value);
								validateEmail();
							}}
							type="email"
						/>
						<LogonSpanError>{erroLogin}</LogonSpanError>
						<InputText
							placeholder="Digite sua senha"
							onChange={(event) => setSenha(event.target.value)}
							type="password"
						/>
						<Botao>Logar</Botao>
					</LogonForm>
				</LogonFormDiv>
			</LogonDiv>
		</>
	);
}

export default Logon;
