import React from "react";

import { InputLabel, InputTextValue } from "./styles";

function InputText({ label, labelStyle, ...props }) {
	return (
		<>
			<InputLabel style={labelStyle}>
				{label}
				<InputTextValue {...props} />
			</InputLabel>
		</>
	);
}

export default React.memo(InputText);
