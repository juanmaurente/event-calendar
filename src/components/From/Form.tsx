// import React, { FormEvent, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import './Form.scss';

const schema = z.object({
	name: z.string().min(3, { message: 'Name must be at least 3 characters' }),
	startDate: z.date().refine((value) => value.getFullYear() >= 1900, {
		message: 'Start date must be in or after 1900',
	}),
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

const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({ resolver: zodResolver(schema) });

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
				{errors.name && (
					<p className='text-danger'>{errors.name.message}</p>
				)}

				<label htmlFor='startDate' className='form-label'>
					Start Date
				</label>
				<input
					{...register('startDate', { valueAsDate: true })}
					id='startDate'
					type='date'
					className='form-control'
				/>
				{errors.startDate && (
					<p className='text-danger'>{errors.startDate.message}</p>
				)}
				<label htmlFor='endDate' className='form-label'>
					End Date
				</label>
				<input
					{...register('endDate', { valueAsDate: true })}
					id='endDate'
					type='date'
					className='form-control'
				/>
				{errors.endDate && (
					<p className='text-danger'>{errors.endDate.message}</p>
				)}
				<label htmlFor='location' className='form-label'>
					Location
				</label>
				<input
					{...register('location')}
					id='location'
					type='text'
					className='form-control'
				/>
				{errors.location && (
					<p className='text-danger'>{errors.location.message}</p>
				)}

				<label htmlFor='label' className='form-label'>
					Label
				</label>
				<input
					{...register('label')}
					id='label'
					type='text'
					className='form-control'
				/>
				{errors.label && (
					<p className='text-danger'>{errors.label.message}</p>
				)}
			</div>
			<button className='form-submit' type='submit'>
				Submit
			</button>
		</form>
	);
};

export default Form;
