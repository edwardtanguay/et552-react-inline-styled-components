import { useState } from "react";


export const InlineResizeBox = () => {
	const [sliderValue, setSliderValue] = useState(50);

	const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSliderValue(Number(event.target.value));
	}
	const boxStyle = {
		backgroundColor: "blue",
		width: `${sliderValue}%`,
		height: `100px`,
	}

	return (
		<div>
			<input
				type="range"
				min="1"
				max="100"
				value={sliderValue}
				onChange={(e) => handleSliderChange(e)}/>
				<div style={boxStyle}></div>
				<hr/> 
				<p>Size: {sliderValue} €</p> 
		</div>

	);
};
