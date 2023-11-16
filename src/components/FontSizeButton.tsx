import { useState } from "react";

export const FontSizeButton = () => {
	const [fontSize, setFontSize] = useState(10);

	const handleButtonClick = (e: React.MouseEvent) => {
		const button = e.target as HTMLButtonElement;
		if (button.textContent === "smaller" && fontSize > 2) {
			setFontSize(fontSize - 2);
		} else if (button.textContent === "bigger" && fontSize < 100) {
			setFontSize(fontSize + 2);
		} else if (button.textContent === "smallest") {
			setFontSize(2);
		} else if (button.textContent === "biggest") {
			setFontSize(100);
		} else if (button.textContent === "reset") {
			setFontSize(10);
		}
	};

	return (
		<>
			<div className=" p-1 rounded border border-slate-700">
				<p style={{ fontSize: `${fontSize}px` }} className="mb-2">
					This Paragraph will change it's Fontsize, the current size
					is {fontSize}px
				</p>
				<button
					onClick={handleButtonClick}
					className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
				>
					smallest
				</button>
				<button
					onClick={handleButtonClick}
					className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
				>
					smaller
				</button>
				<button
					onClick={handleButtonClick}
					className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					reset
				</button>
				<button
					onClick={handleButtonClick}
					className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
				>
					bigger
				</button>
				<button
					onClick={handleButtonClick}
					className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
				>
					biggest
				</button>
			</div>
		</>
	);
};
