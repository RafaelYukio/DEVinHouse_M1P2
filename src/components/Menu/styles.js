import styled from "styled-components";

export const MenuStyle = styled.nav`
	height: 100%;
	width: 300px;
	display: flex;
	flex-direction: column;
	justify-content: top;
	align-items: center;
	background-color: white;
	border-right: solid #e5e5e5 1px;

	position: fixed;
	z-index: 1;
	top: 0;
	left: 0;
	overflow-x: hidden;
	transition: 0.5s;
`;

export const MenuUser = styled.div`
	margin: 15px 0;
	padding: 5px 40px;
	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: center;
	border: solid #e5e5e5 1px;
	border-radius: 20px;

	> span {
		text-align: center;
		margin: 5px 0;
	}
`;

export const MenuImg = styled.img`
  width: 200px;
  padding: 30px;

  @keyframes animacao {
    0% {
      transform: scale(1, 1) rotate(-0.05turn);
    }
    50% {
      transform: scale(1.5, 1.5) rotate(0.05turn);
    }
    100% {
      transform: scale(1, 1) rotate(-0.05turn);
    }
  }
  animation: ${(props) => (props.angry ? "animacao 1s infinite" : "none")};
}

`;

export const MenuTitle = styled.span`
	font-size: 30px;
`;
