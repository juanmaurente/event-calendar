import React, { FormEvent, useRef } from 'react';
import './Form.scss';

const Form = () => {
	const nameRef = useRef<HTMLInputElement>(null);
	const startDateRef = useRef<HTMLInputElement>(null);
	const endDateRef = useRef<HTMLInputElement>(null);
	const locationRef = useRef<HTMLInputElement>(null);
	const labelRef = useRef<HTMLInputElement>(null);

	const newEvent = {
		name: '',
		startDate: '',
		endDate: '',
		location: '',
		label: '',
	};

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		if (
			nameRef.current &&
			startDateRef.current &&
			endDateRef.current &&
			locationRef.current &&
			labelRef.current
		) {
			newEvent.name = nameRef.current.value;
			newEvent.startDate = startDateRef.current.value;
			newEvent.endDate = endDateRef.current.value;
			newEvent.location = locationRef.current.value;
			newEvent.label = labelRef.current.value;
		}

		console.log(newEvent);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className='form-container'>
				<label htmlFor='name' className='form-label'>
					Name
				</label>
				<input
					ref={nameRef}
					id='name'
					type='text'
					className='form-control'
				/>
				<label htmlFor='startDate' className='form-label'>
					Start Date
				</label>
				<input
					ref={startDateRef}
					id='startDate'
					type='date'
					className='form-control'
				/>
				<label htmlFor='endDate' className='form-label'>
					End Date
				</label>
				<input
					ref={endDateRef}
					id='endDate'
					type='date'
					className='form-control'
				/>
				<label htmlFor='location' className='form-label'>
					Location
				</label>
				<input
					ref={locationRef}
					id='location'
					type='text'
					className='form-control'
				/>
				<label htmlFor='label' className='form-label'>
					Label
				</label>
				<input
					ref={labelRef}
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
