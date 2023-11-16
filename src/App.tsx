import { AppRouter } from "./AppRouter";
import { Header } from "./components/Header";

function App() {
	return (
		<>
			<Header />
			<main className="py-4">
				<AppRouter />
			</main>
		</>
	);
}

export default App;
