import React from "react";

import { InputLabel, InputCheckboxValue } from "./styles";

function InputCheckbox({ label, ...props }) {
	return (
		<>
			<InputLabel>
				{label}
				<InputCheckboxValue {...props} type="checkbox" />
			</InputLabel>
		</>
	);
}

export default React.memo(InputCheckbox);
