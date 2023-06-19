import React, { FormEvent, useState } from 'react';
import './Form.scss';

const Form = () => {
	const [newEvent, setNewEvent] = useState({
		name: '',
		startDate: '',
		endDate: '',
		location: '',
		label: '',
	});

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		console.log(newEvent);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className='form-container'>
				<label htmlFor='name' className='form-label'>
					Name
				</label>
				<input
					value={newEvent.name}
					onChange={(event) =>
						setNewEvent({ ...newEvent, name: event.target.value })
					}
					id='name'
					type='text'
					className='form-control'
				/>
				<label htmlFor='startDate' className='form-label'>
					Start Date
				</label>
				<input
					value={newEvent.startDate}
					onChange={(event) =>
						setNewEvent({
							...newEvent,
							startDate: event.target.value,
						})
					}
					id='startDate'
					type='date'
					className='form-control'
				/>
				<label htmlFor='endDate' className='form-label'>
					End Date
				</label>
				<input
					value={newEvent.endDate}
					onChange={(event) =>
						setNewEvent({
							...newEvent,
							endDate: event.target.value,
						})
					}
					id='endDate'
					type='date'
					className='form-control'
				/>
				<label htmlFor='location' className='form-label'>
					Location
				</label>
				<input
					value={newEvent.location}
					onChange={(event) =>
						setNewEvent({
							...newEvent,
							location: event.target.value,
						})
					}
					id='location'
					type='text'
					className='form-control'
				/>
				<label htmlFor='label' className='form-label'>
					Label
				</label>
				<input
					value={newEvent.label}
					onChange={(event) =>
						setNewEvent({
							...newEvent,
							label: event.target.value,
						})
					}
					id='label'
					type='text'
					className='form-control'
				/>
			</div>
			<button className='form-submit' type='submit'>
				Submit
			</button>
		</form>
	);
};

export default Form;
