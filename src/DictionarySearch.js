import React, { useState } from "react";
import "./DictionarySearch.css";

export default function DictionarySearch() {
	let [keyword, setKeyword] = useState("");

	function WordSearch(event) {
		event.preventDefault();
		alert(
			`Searching everywhere for the definition of ${keyword}, just a moment...`
		);
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
