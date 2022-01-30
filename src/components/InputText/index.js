import React from "react";

import { InputLabel, InputTextValue } from "./styles";

function InputText({ label, ...props }) {
	return (
		<>
			<InputLabel>
				{label}
				<InputTextValue {...props} />
			</InputLabel>
		</>
	);
}

export default React.memo(InputText);
