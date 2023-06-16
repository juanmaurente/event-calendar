import { useState } from 'react';
import './Calendar.scss';
import Cell from '../Cell/Cell';
import Title from '../Title/Title';

const Calendar = () => {
	const [currentMonth, setCurrentMonth] = useState(new Date());

	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	const dayNames = [
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
		'Sunday',
	];

	const month = monthNames[currentMonth.getMonth()];
	const year = currentMonth.getFullYear();
	const daysInAMonth = new Date(
		year,
		currentMonth.getMonth() + 1,
		0,
	).getDate();

	const firstDayOfWeek = new Date(year, currentMonth.getMonth(), 0).getDay();
	const emptyCells = [];

	for (let i = 0; i < firstDayOfWeek; i++) {
		emptyCells.push(<div key={i}></div>);
	}

	const days = [];

	for (let day = 1; day <= daysInAMonth; day++) {
		days.push(day);
	}

	const handlePrevMonth = () => {
		setCurrentMonth(
			new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1),
		);
	};

	const handleNextMonth = () => {
		setCurrentMonth(
			new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1),
		);
	};

	return (
		<div>
			<Title
				month={month}
				year={year}
				handlePrevMonth={handlePrevMonth}
				handleNextMonth={handleNextMonth}
			/>
			<div className='calendar'>
				<div className='calendar-header'>
					{dayNames.map((day) => (
						<div key={day}>{day}</div>
					))}
				</div>
				<div className='calendar-grid' data-testid='calendar-grid'>
					{emptyCells}
					{days.map((day) => (
						<Cell key={day} date={day} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Calendar;
