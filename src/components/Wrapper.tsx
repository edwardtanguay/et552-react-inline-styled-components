interface IProps {
	children: React.ReactNode;
	title: string;
}

export const Wrapper = ({ children, title } : IProps) => {
	return (
		<fieldset className="border border-slate-500 p-4 rounded mb-4">
			<legend className="font-bold">{title}</legend>
			{children}
		</fieldset>
	)
}