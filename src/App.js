import React from 'react';
import './App.css';
import Title from './components/Title';
import RefreshButton from './components/RefreshButton';
import CardField from './components/CardField';
import AddForm from './components/AddForm';

function App() {
	return (
		<div className="App">
			<Title>
				<h1>Notes</h1>
				<RefreshButton />
			</Title>
			<CardField />
			<AddForm />
		</div>
	);
}

export default App;
