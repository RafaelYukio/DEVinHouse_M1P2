import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { HeaderStyle, LogoutButton } from "./styles";

function Header({ name }) {
	const [clickLogout, setClickLogout] = useState(false);

	function logout() {
		setClickLogout(true);
		toast.success("Logout realizado!");
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
