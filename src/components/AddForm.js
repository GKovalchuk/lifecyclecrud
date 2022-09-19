import '../assets/css/addForm.css'

function AddForm() {

	return (
		<div className="add-form">
			<form action="" >
				<label htmlFor="addForm">New Note</label>
				<input id='addForm' type="text" />
				<button className='add-form__button'>
					<img src="/assets/send.png" alt="" />
				</button>
			</form>
		</div>
	);
}

export default AddForm;
