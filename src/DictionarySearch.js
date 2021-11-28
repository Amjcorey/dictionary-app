import React from "react";
import "./DictionarySearch.css";

export default function DictionarySearch() {
	function WordSearch(event) {
		event.preventDefault();
		alert("Searching...");
	}

	return (
		<div className="Dictionary">
			<form onSubmit={WordSearch}>
				<input type="seach" />
			</form>
		</div>
	);
}
