import React from "react";
import WordMeanings from "./WordMeanings";

export default function Results(props) {
	if (props.results) {
		return (
			<div className="Results">
				<h2>{props.results.word} </h2>
				{props.results.meanings.map(function (meaning, index) {
					return (
						<div key={index}>
							<WordMeanings meaning={meaning} />
						</div>
					);
				})}
			</div>
		);
	} else {
		return null;
	}
}
