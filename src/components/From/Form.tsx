// import React, { FormEvent, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import './Form.scss';
import { Event } from './types';

interface FormProps {
	handleAddEvent: (newEvent: Event) => void;
}

const schema = z.object({
	name: z.string().min(3, { message: 'Name must be at least 3 characters' }),
	startDate: z.date().refine((value) => {
		const today = new Date();
		return value >= today;
	}, 'Start date must be today or after today'),
	endDate: z.date().refine((value) => value.getFullYear() <= 2030, {
		message: 'End date must be in or before 2030',
	}),
	location: z
		.string()
		.min(3, { message: 'Location must be at least 3 characters' }),
	label: z
		.string()
		.min(3, { message: 'Label must be at least 3 characters' }),
});

type FormData = z.infer<typeof schema>;

const Form: React.FC<FormProps> = ({ handleAddEvent }) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<FormData>({ resolver: zodResolver(schema) });

	const onSubmit = (data: FieldValues) => {
		const { name, startDate, endDate, location, label } = data;

		const newEvent: Event = {
			name: name as string,
			startDate: startDate as Date,
			endDate: endDate as Date,
			location: location as string,
			label: label as string,
		};

		handleAddEvent(newEvent);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='form-container'>
			<h2 className='form-header'>Create Event</h2>
			<div className='horizontal-line'></div>
			<div className='form-content'>
				<div className='form-field'>
					<label htmlFor='name' className='form-label'>
						Name
					</label>
					<div className='form-input'>
						<input
							{...register('name')}
							id='name'
							type='text'
							className='form-control form-string'
							placeholder='Enter name'
						/>
					</div>
					{/* {errors.name && (
						<p className='text-danger'>{errors.name.message}</p>
					)} */}
				</div>

				<div className='form-field'>
					<label htmlFor='startDate' className='form-label'>
						Start Date
					</label>
					<div className='form-input'>
						<input
							{...register('startDate')}
							id='startDate'
							type='date'
							className='form-control custom-date-input'
						/>
					</div>
					{/* {errors.startDate && (
						<p className='text-danger'>
							{errors.startDate.message}
						</p>
					)} */}
				</div>

				<div className='form-field'>
					<label htmlFor='endDate' className='form-label'>
						End Date
					</label>
					<div className='form-input'>
						<input
							{...register('endDate')}
							id='endDate'
							type='date'
							className='form-control form-date custom-date-input'
						/>
					</div>
					{/* {errors.endDate && (
						<p className='text-danger'>{errors.endDate.message}</p>
					)} */}
				</div>

				<div className='form-field'>
					<label htmlFor='location' className='form-label'>
						Location
					</label>
					<div className='form-input'>
						<input
							{...register('location')}
							id='location'
							type='text'
							className='form-control form-string'
							placeholder='Enter location'
						/>
					</div>
					{/* {errors.location && (
						<p className='text-danger'>{errors.location.message}</p>
					)} */}
				</div>

				<div className='form-field'>
					<label htmlFor='label' className='form-label'>
						Label
					</label>
					<div className='form-input'>
						<input
							{...register('label')}
							id='label'
							type='text'
							className='form-control form-string'
							placeholder='Enter label'
						/>
					</div>
					{/* {errors.label && (
						<p className='text-danger'>{errors.label.message}</p>
					)} */}
				</div>
			</div>
			<button disabled={!isValid} id='form-submit' type='submit'>
				Create Event
			</button>
		</form>
	);
};

export default Form;
