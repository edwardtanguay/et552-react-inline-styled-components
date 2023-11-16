import { Navigate, Route, Routes } from "react-router-dom";
import { PageStyledComponents } from "./pages/PageStyledComponents.tsx";
import { PageAbout } from "./pages/PageAbout.tsx";
import { PageInlineStyles } from "./pages/PageInlineStyles.tsx";

export const AppRouter = () => {
	return (
		<Routes>
			<Route path="/inline-styles" element={<PageInlineStyles />} />
			<Route path="/styled-components" element={<PageStyledComponents />} />
			<Route path="/about" element={<PageAbout />} />
			<Route index element={<Navigate to="/inline-styles" replace />} />
		</Routes>
	);
};
