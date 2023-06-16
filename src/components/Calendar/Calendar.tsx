import { useState } from 'react';
import './Calendar.scss';
import Cell from '../Cell/Cell';
import Title from '../Title/Title';
import MonthNames from '../../utils/MonthNames';
import DayNames from '../../utils/DayNames';

const Calendar = () => {
	const [currentMonth, setCurrentMonth] = useState(new Date());

	const month = MonthNames[currentMonth.getMonth()];
	const year = currentMonth.getFullYear();
	const days = Array.from(
		{ length: new Date(year, currentMonth.getMonth() + 1, 0).getDate() },
		(_, i) => i + 1,
	);

	// const daysInCurrentMonth = new Date(year, currentMonth.getMonth() + 1, 0).getDate();
	// const days = [];
	// for (let day = 1; day <= daysInCurrentMonth; day++) {
	// 	days.push(day);
	// }

	const firstDayOfWeek = new Date(year, currentMonth.getMonth(), 0).getDay();
	const emptyCells = [];

	for (let i = 0; i < firstDayOfWeek; i++) {
		emptyCells.push(<div key={i}></div>);
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
					{DayNames.map((day) => (
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
