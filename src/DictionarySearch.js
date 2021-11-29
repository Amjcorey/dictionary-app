import React, { useState } from "react";
import "./DictionarySearch.css";
import axios from "axios";

export default function DictionarySearch() {
	let [keyword, setKeyword] = useState("");

	function handleRespons(response) {
		console.log(response.data[0]);
	}

	function WordSearch(event) {
		event.preventDefault();
		alert(
			`Searching everywhere for the definition of ${keyword}, just a moment...`
		);

		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/sunset\\${keyword}`;

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
		</div>
	);
}
