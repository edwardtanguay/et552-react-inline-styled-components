import { useState } from "react";
import styled from "styled-components";

interface IOnlineText {
	isOnline: boolean;
}

export const StyledOnlineToggle = () => {
	const [isOnline, setIsOnline] = useState(false);

	const ToggleOnlineButton = styled.button`
		background-color: #64748b;
		padding-right: 0.7rem;
		padding-left: 0.7rem;
		padding-top: 0.3rem;
		padding-bottom: 0.5rem;
		border-radius: 0.2rem;
		cursor: pointer;
	`;

	const OnlineText = styled.p<IOnlineText>`
		color: ${(props) => (props.isOnline ? "darkgreen" : "darkred")};
	`;

	return (
		<>
			<ToggleOnlineButton onClick={() => setIsOnline(!isOnline)}>
				Toggle
			</ToggleOnlineButton>
			<OnlineText isOnline={isOnline}>
				User is now {isOnline ? "online" : "offline"}.
			</OnlineText>
		</>
	);
};
