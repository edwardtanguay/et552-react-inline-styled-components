import { useState } from "react";
import { InlineResizeBox } from "../components/InlineResizeBox";
import { FontSizeButton } from "../components/FontSizeButton";
import { Wrapper } from "../components/Wrapper";

export const PageInlineStyles = () => {
	const [isOnline, setIsOnline] = useState(true);
	return (
		<>
			<Wrapper title="Online toggle">
				<button onClick={() => setIsOnline(!isOnline)}>Toggle</button>
				<p style={{ color: isOnline ? "green" : "red" }}>
					{isOnline ? "User is now online" : "User is now offline"}
				</p>
				<p style={{ fontWeight: isOnline ? "bold" : "normal" }}>
					Hans Schmidt
				</p>
			</Wrapper>

			<Wrapper title="Inline resize box">
				<InlineResizeBox />
			</Wrapper>

			<Wrapper title="Font-size changer">
				<FontSizeButton />
			</Wrapper>
		</>
	);
};
