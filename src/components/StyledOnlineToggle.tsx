import styled from 'styled-components';

interface ITextDiv {
	backColor: string;
	border?: boolean;
}

export const StyledOnlineToggle = () => {

	const TextDiv = styled.div<ITextDiv>`
		background-color: ${(props) => (props.backColor ? props.backColor : 'black')};
		height: 5rem;
		width: 5rem;
		border: ${(props) => (props.border ? '3px solid blue' : '')}
	`;

	return (
		<>
			<TextDiv border backColor="orchid" />
		</>
	)
}