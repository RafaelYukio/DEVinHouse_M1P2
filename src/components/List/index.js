import React from "react";
import BotaoRemove from "../ListButtonRemove";
import BotaoEdita from "../ListButtonEdit";
import { ListTable, ListTr, ListTh, ListTd } from "./styles";

function List({ tableTitles, unidades, dados }) {
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

	return (
		<ListTable>
			<thead>
				<ListTr>
					{tableTitles.map((tableTitle) => (
						<ListTh key={tableTitle}>{tableTitle}</ListTh>
					))}
					<ListTh />
					<ListTh />
				</ListTr>
			</thead>
			<tbody>
				{unidades.map((unidade) => (
					<ListTr key={unidade.id + "tr"}>
						{dados.map((dado) => (
							<ListTd key={unidade.id + unidade[dado]}>
								{verificaBoolean(unidade[dado])}
							</ListTd>
						))}
						<ListTd>
							<BotaoEdita value={unidade.id}>Editar</BotaoEdita>
						</ListTd>
						<ListTd>
							<BotaoRemove value={unidade.id}>Remover</BotaoRemove>
						</ListTd>
					</ListTr>
				))}
			</tbody>
		</ListTable>
	);
}

export default List;
