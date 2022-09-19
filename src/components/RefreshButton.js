function RefreshButton() {
	const loadData = () => {
		fetch("http://localhost:7777/notes")
			.then(response => response.json(),
				() => console.log('error'))
		// .then(dataa =>
		// 	setText({ asd: dataa[0].content }))
	}
	return (
		<button onClick={loadData} className="refresh-button">
			<img src="/assets/refresh.png" alt="refresh" />
		</button>
	);
}

export default RefreshButton;