import { FieldValues, useForm } from 'react-hook-form';
import './Form.scss';
import { Event } from '../../utils/types';

interface Props {
	handleAddEvent: (newEvent: Event) => void;
}

const Form: React.FC<Props> = ({ handleAddEvent }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm<Event>();

	const startDate = watch('startDate');

	const onSubmit = (data: FieldValues) => {
		const newEvent = {
			name: data.name,
			startDate: data.startDate,
			endDate: data.endDate,
			location: data.location,
			label: data.label,
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
					<input
						{...register('name')}
						id='name'
						type='text'
						className='form-control form-string'
					/>
				</div>
				<div className='form-field'>
					<label htmlFor='startDate' className='form-label'>
						Start Date
					</label>
					<input
						{...register('startDate', {
							validate: (value) => {
								const currentDate = new Date();
								const selectedDate = new Date(value);
								return (
									selectedDate >= currentDate ||
									'Start date must be in the future'
								);
							},
						})}
						id='startDate'
						type='date'
						className='form-control custom-date-input'
					/>
					{errors.startDate && (
						<span className='error-message'>
							{errors.startDate.message}
						</span>
					)}
				</div>
				<div className='form-field'>
					<label htmlFor='endDate' className='form-label'>
						End Date
					</label>
					<input
						{...register('endDate', {
							validate: (value) => {
								const selectedDate = new Date(value);
								const selectedStartDate = new Date(startDate);
								return (
									selectedDate >= selectedStartDate ||
									'End date must be later than start date'
								);
							},
						})}
						id='endDate'
						type='date'
						className='form-control custom-date-input'
					/>
					{errors.endDate && (
						<span className='error-message'>
							{errors.endDate.message}
						</span>
					)}
				</div>
				<div className='form-field'>
					<label htmlFor='location' className='form-label'>
						Location
					</label>
					<input
						{...register('location')}
						id='location'
						type='text'
						className='form-control'
					/>
				</div>
				<div className='form-field'>
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
			</div>
			<button id='form-submit' type='submit'>
				Submit
			</button>
		</form>
	);
};

export default Form;
