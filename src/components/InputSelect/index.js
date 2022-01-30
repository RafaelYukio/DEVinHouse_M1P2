import React from "react";

import { InputLabel, InputSelectValues } from "./styles";

function InputSelect({ label, name, values, ...props }) {
	return (
		<>
			<InputLabel>
				{label}
				<InputSelectValues {...props}>
					{values.map((value) => (
						<option value={value.apelido}>{value}</option>
					))}
				</InputSelectValues>
			</InputLabel>
		</>
	);
}

export default React.memo(InputSelect);
