import '../assets/css/cardField.css'
import Card from './Card';

function CardField(props) {
	const cards = props.notes;
	const removeCard = props.removeCard;

	return (
		<div className="card-field">
			{cards.map(card => (<Card key={card.id} id={card.id} text={card.text} removeCard={removeCard} />))}
		</div>
	);
}

export default CardField;