import styled from "styled-components";

export const LogonImg = styled.img`
	width: 50%;
`;

export const LogonDiv = styled.div`
	width: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #e8e8e8;
`;

export const LogonFormDiv = styled.div`
	width: 400px;
	height: 70%;
	padding: 50px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 30px;
	background-color: #f8f8f8;

	box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
		rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

export const LogonFormImg = styled.img`
    width: 250px;

    

    @keyframes animacao {
      0% {
        transform: scale(1, 1);
      }
      50% {
        transform: scale(1.2, 1.2);
      }
      100% {
        transform: scale(1, 1);
      }
    }
    animation: ${(props) => (props.angry ? "animacao 1s infinite" : "none")};
  }
`;

export const LogonFormTitle = styled.span`
	font-size: 22px;
	font-weight: bold;
	margin: 10px 0;
`;

export const LogonForm = styled.form`
	width: 300px;
	margin: 30px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const LogonButtonDiv = styled.div`
	margin: 15px;
	display: flex;
`;

export const LogonSpanError = styled.span`
	position: relative;
	font-size: 15px;
	color: red;
`;
