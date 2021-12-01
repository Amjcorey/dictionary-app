import React from "react";
import WordMeanings from "./WordMeanings";

export default function Results(props) {
	console.log(props.results);
	if (props.results) {
		return (
			<div className="Results">
				<h2>{props.results.word} </h2>
				<WordMeanings />
				{props.results.word}
			</div>
		);
	} else {
		return null;
	}
}
