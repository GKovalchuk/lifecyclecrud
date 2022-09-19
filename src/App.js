import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';
import RefreshButton from './components/RefreshButton';
import CardField from './components/CardField';
import AddForm from './components/AddForm';

function App() {
	const [notes, setNotes] = useState([{
		id: 0,
		text: 'asdasdasd'
	}, {
		id: 1,
		text: 'asdasdasd'
	}, {
		id: 2,
		text: 'asdasdasd'
	}])

	function removeCard(removingCardId) {
		setNotes(prevState => prevState.filter(item => item.id !== removingCardId));
	}

	return (
		<div className="App">
			<Title>
				<h1>Notes</h1>
				<RefreshButton />
			</Title>
			<CardField notes={notes} removeCard={removeCard} />
			<AddForm />
		</div>
	);
}

export default App;
