import React from "react";
import { useContext } from "react";
import { AngrySun } from "../../context/AngrySun";
import { InputLabel, InputCheckboxValue } from "./styles";

function AngryCheckbox({ label, ...props }) {
	const { angrySun, setAngrySun } = useContext(AngrySun);

	function handleClick() {
		setAngrySun(!angrySun);
	}

	return (
		<>
			<InputLabel>
				AngrySun
				<InputCheckboxValue
					{...props}
					type="checkbox"
					onChange={handleClick}
					checked={angrySun}
				/>
			</InputLabel>
		</>
	);
}

export default React.memo(AngryCheckbox);
