import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { UserContext } from "../../context/User";
import { AngrySun } from "../../context/AngrySun";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import InputText from "../../components/InputText";
import Botao from "../../components/Button";
import AngryCheckbox from "../../components/AngrySunCheckbox";
import {
	LogonImg,
	LogonDiv,
	LogonFormDiv,
	LogonFormImg,
	LogonForm,
	LogonButtonDiv,
	LogonSpanError,
	LogonFormTitle,
} from "./styles";

function Logon() {
	const baseURL = "http://localhost:3333/usuarios?login=";
	const baseURLUsuarios = "http://localhost:3333/usuarios";

	const validaEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

	const { setUsuarioLogado } = useContext(UserContext);
	const { angrySun } = useContext(AngrySun);

	const [usuarios, setUsuarios] = useState([]);
	const [login, setLogin] = useState("");
	const [senha, setSenha] = useState("");
	const [erroLogin, setErroLogin] = useState("");
	const [autenticador, setAutenticador] = useState(false);
	const [imagem, setImagem] = useState("logodev.png");

	async function getUsuarios() {
		try {
			const response = await axios.get(baseURLUsuarios);
			setUsuarios(response.data);
		} catch (error) {
			alert("Nenhuma unidade cadastrada");
		}
	}

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
				toast.success("Logado com sucesso!");
			} else {
				setAutenticador(false);
				toast.error("Senha incorreta!");
			}
		} catch (error) {
			toast.error("Email incorreto!");
		}
	}

	async function criarUsuario(event) {
		event.preventDefault();

		if (validaEmail.test(login) && senha !== "") {

			let usuarioExistente = false;
			const listaUsuarios = usuarios.map((objeto) => objeto.login);

			for (const valor of listaUsuarios) {
				if (valor === login) {
					usuarioExistente = true;
				}
			}

			if (usuarioExistente) {
				toast.error("Email já cadastrado!");
			} else {
				try {
					await axios.post(baseURLUsuarios, {
						id: uuidv4(),
						login: login,
						senha: senha,
					});
					toast.success("Usuário cadastrado!");
					getUsuarios();
				} catch (error) {
					toast.error("Erro no servidor!");
				}
			}
		} else {
			toast.error("Email ou senha inválida!");
		}
	}

	useEffect(() => {
		getUsuarios();

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
						<LogonButtonDiv>
							<Botao type="submit">Logar</Botao>
							<Botao type="button" onClick={criarUsuario}>
								Registrar
							</Botao>
						</LogonButtonDiv>
					</LogonForm>
				</LogonFormDiv>
			</LogonDiv>
		</>
	);
}

export default Logon;
