import { useState } from "react";
import { InlineResizeBox } from "../components/InlineResizeBox";

export const PageInlineStyles = () => {
	const [isOnline, setIsOnline] = useState(true);
	return (
		<>
			<p>This is the inline styles page.</p>
			<button onClick={() => setIsOnline(!isOnline)}>Toggle</button>
			<p style={{ color: isOnline ? "green" : "red" }}>
				{isOnline ? "User is now online" : "User is now offline"}
			</p>
			<p style={{fontWeight: isOnline ? 'bold': 'normal'}}>
				Hans Schmidt 
			</p>

			<InlineResizeBox/>
		</>
	);
};
