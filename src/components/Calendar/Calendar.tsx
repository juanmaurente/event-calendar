import { useEffect, useState } from 'react';
import './Calendar.scss';
import Cell from '../Cell/Cell';
import Title from '../Title/Title';
import MonthNames from '../../utils/MonthNames';
import DayNames from '../../utils/DayNames';
import { Event } from '../../utils/types';

interface Props {
	events: Event[];
	handleAddEvent: (newEvent: Event) => void;
	showModal: boolean;
	setShowModal: (show: boolean) => void;
	onCloseModal: (show: boolean) => void;
	setDisplayEvent: (show: boolean) => void;
}

const Calendar: React.FC<Props> = ({
	showModal,
	setShowModal,
	onCloseModal,
	events,
	setDisplayEvent,
}) => {
	const [currentMonth, setCurrentMonth] = useState(new Date());
	const [selectedDate, setSelectedDate] = useState<number | null>(null);

	const month = MonthNames[currentMonth.getMonth()];
	const year = currentMonth.getFullYear();
	const days = Array.from(
		{ length: new Date(year, currentMonth.getMonth() + 1, 0).getDate() },
		(_, i) => {
			const day = i + 1;
			const dayEvents = events.filter(
				(event) =>
					event.startDate &&
					event.startDate instanceof Date &&
					event.startDate.getFullYear() === year &&
					event.startDate.getMonth() === currentMonth.getMonth() &&
					event.startDate.getDate() === day,
			);
			return {
				day,
				hasEvents: dayEvents.length > 0,
			};
		},
	);
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
		<div className='calendar-container'>
			<Title
				month={month}
				year={year}
				handlePrevMonth={handlePrevMonth}
				handleNextMonth={handleNextMonth}
			/>
			<div>
				<div className='calendar-grid calendar-header'>
					{DayNames.map((day) => (
						<div key={day}>{day}</div>
					))}
				</div>
				<div className='calendar-grid' data-testid='calendar-grid'>
					{emptyCells}
					{days.map((day) => (
						<Cell
							key={String(day.day)}
							date={day.day}
							setSelectedDate={setSelectedDate}
							showModal={showModal}
							setShowModal={setShowModal}
							onCloseModal={onCloseModal}
							hasEvents={day.hasEvents}
							setDisplayEvent={setDisplayEvent}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Calendar;
