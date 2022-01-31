import React from "react";

import { InputLabel, InputSelectValues } from "./styles";

function InputSelect({ label, name, values, ...props }) {
	const apelidos = () =>
		values.map((value) => {
			return {
				apelido: value.apelido,
				id: value.id,
			};
		});

	return (
		<>
			<InputLabel>
				{label}
				<InputSelectValues {...props}>
					{apelidos().map((apelidosIDs) => (
						<option value={apelidosIDs.apelido} key={apelidosIDs.id}>
							{apelidosIDs.apelido}
						</option>
					))}
				</InputSelectValues>
			</InputLabel>
		</>
	);
}

export default React.memo(InputSelect);
