import '../assets/css/card.css'

function Card(props) {
	const text = props.text;
	const cardId = props.id;

	const removeCard = () => {
		return props.removeCard(cardId)
	};

	return (
		<div className="card">
			<button onClick={removeCard} className='card__button'>
				<img src="/assets/cross.png" alt="" />
			</button>
			<p>
				{text}
			</p>
		</div>
	);
}

export default Card;