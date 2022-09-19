import '../assets/css/title.css';
import React from 'react';

function Title(props) {
	return (
		<div className="title">
			{props.children[0]}
			{props.children[1]}
		</div>
	);
}

export default Title;