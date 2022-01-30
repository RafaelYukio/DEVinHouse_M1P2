import React from "react";
import { useState, useMemo } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Logon from "./pages/Logon";
import Dashboard from "./pages/Dashboard";
import Unidades from "./pages/Unidades";
import CadastroUnidade from "./pages/CadastroUnidade";
import EditaUnidade from "./pages/EditaUnidade";
import CadastroGeracao from "./pages/CadastroGeracao";
import { UserContext } from "./context/User";
import { UnidadeID } from "./context/UnidadeID";
import { AngrySun } from "./context/AngrySun";

function App() {
	const [usuarioLogado, setUsuarioLogado] = useState("");
	const [unidadeID, setUnidadeID] = useState("");
	const [angrySun, setAngrySun] = useState(false);

	const providerUsuarioLogado = useMemo(
		() => ({
			usuarioLogado,
			setUsuarioLogado,
		}),
		[usuarioLogado, setUsuarioLogado]
	);

	const providerUnidadeID = useMemo(
		() => ({
			unidadeID,
			setUnidadeID,
		}),
		[unidadeID, setUnidadeID]
	);

	const providerangrySun = useMemo(
		() => ({
			angrySun,
			setAngrySun,
		}),
		[angrySun, setAngrySun]
	);

	return (
		<div className="all">
			<UserContext.Provider value={providerUsuarioLogado}>
				<UnidadeID.Provider value={providerUnidadeID}>
					<AngrySun.Provider value={providerangrySun}>
						<Routes>
							<Route path="/" element={<Logon />} />
							<Route path="/dashboard" element={<Dashboard />} />
							<Route path="/cadastrounidade" element={<CadastroUnidade />} />
							<Route path="/unidades" element={<Unidades />} />
							<Route path="/editaunidade" element={<EditaUnidade />} />
							<Route path="/cadastrogeracao" element={<CadastroGeracao />} />
						</Routes>
					</AngrySun.Provider>
				</UnidadeID.Provider>
			</UserContext.Provider>
		</div>
	);
}

export default App;
