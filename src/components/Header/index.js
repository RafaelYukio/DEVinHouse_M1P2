import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { HeaderStyle, LogoutButton } from "./styles";

function Header({ name }) {
	const [clickLogout, setClickLogout] = useState(false);

	function logout() {
		setClickLogout(true);
	}

	return (
		<>
			{clickLogout && <Navigate to={"/"} replace={true} />}
			<HeaderStyle>{name}</HeaderStyle>
			<LogoutButton onClick={logout}>Logout</LogoutButton>
		</>
	);
}

export default Header;
