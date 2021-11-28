import "./App.css";
import DictionarySearch from "./DictionarySearch";

export default function App() {
	return (
		<div className="App">
			<div className="container">
				<header className="App-header">Dictionary App</header>
				<main>
					<DictionarySearch />
				</main>
				<footer className="text-center">
					Open source coded by Amanda Corey
				</footer>
			</div>
		</div>
	);
}
