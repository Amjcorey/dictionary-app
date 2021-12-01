import React, { useState } from "react";
import "./DictionarySearch.css";
import Results from "./Results";
import axios from "axios";

export default function DictionarySearch() {
	let [keyword, setKeyword] = useState("");
	let [results, setResults] = useState(null);

	function handleRespons(response) {
		console.log(response.data[0]);
		setResults(response.data[0]);
	}

	function WordSearch(event) {
		event.preventDefault();

		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

		axios.get(apiUrl).then(handleRespons);
	}

	function handleKeyWord(event) {
		setKeyword(event.target.value);
	}

	return (
		<div className="Dictionary">
			<form onSubmit={WordSearch}>
				<input type="seach" onChange={handleKeyWord} />
			</form>
			<Results results={results} />
		</div>
	);
}
