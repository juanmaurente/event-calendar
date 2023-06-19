import React, { FormEvent, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import './Form.scss';

const Form = () => {
	const { register, handleSubmit } = useForm();

	const onSubmit = (data: FieldValues) => console.log(data);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className='form-container'>
				<label htmlFor='name' className='form-label'>
					Name
				</label>
				<input
					{...register('name')}
					id='name'
					type='text'
					className='form-control'
				/>
				<label htmlFor='startDate' className='form-label'>
					Start Date
				</label>
				<input
					{...register('startDate')}
					id='startDate'
					type='date'
					className='form-control'
				/>
				<label htmlFor='endDate' className='form-label'>
					End Date
				</label>
				<input
					{...register('endDate')}
					id='endDate'
					type='date'
					className='form-control'
				/>
				<label htmlFor='location' className='form-label'>
					Location
				</label>
				<input
					{...register('location')}
					id='location'
					type='text'
					className='form-control'
				/>
				<label htmlFor='label' className='form-label'>
					Label
				</label>
				<input
					{...register('label')}
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
