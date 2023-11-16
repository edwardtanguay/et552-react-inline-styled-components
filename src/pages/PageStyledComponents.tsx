import { StyledOnlineToggle } from "../components/StyledOnlineToggle";
import { TestDiv } from "../components/TestDiv";
import { Wrapper } from "../components/Wrapper";

export const PageStyledComponents = () => {
	return (
		<>
			<Wrapper title="Test of styled components">
				<TestDiv />
			</Wrapper>
			<Wrapper title="Online toggle">
				<StyledOnlineToggle />
			</Wrapper>
		</>
	);
};
