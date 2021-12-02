import React from "react";

export default function WordMeanings(props) {
	console.log(props.meaning);

	return (
		<div className="WordMeanings">
			<h4>{props.meaning.partOfSpeech} </h4>
			{props.meaning.definitions.map(function (definition, index) {
				return (
					<div key={index}>
						<p>
							{definition.definition}
							<br />
							<em>{definition.example}</em>
						</p>
					</div>
				);
			})}
		</div>
	);
}
