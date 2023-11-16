import { useState } from "react";

export const PageInlineStyles = () => {
	const [isOnline, setIsOnline] = useState(true);
	const handleButtonClick = () => {
		setIsOnline(!isOnline)
	}
		
	return (
		<>
			<p>This is the inline styles page.</p>
			<button onClick={handleButtonClick}>Toggle</button>
			<p style={{ color: isOnline ? "green" : "red" }}>
				{isOnline ? "User is now online" : "User is now offline"}
			</p>
			<p style={{fontWeight: isOnline ? 'bold': 'normal'}}>
				Hans Schmidt 
			</p>
		</>
	);
};
