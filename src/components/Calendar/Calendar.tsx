import { useState } from 'react';
import './Calendar.scss';
import Cell from '../Cell/Cell';
import Title from '../Title/Title';
import DayNames from '../../utils/DayNames';
import { Event } from '../../utils/types';

interface Props {
	days: { day: number; hasEvents: boolean }[];
	year: number;
	month: string;
	emptyCells: JSX.Element[];
	handlePrevMonth: () => void;
	handleNextMonth: () => void;
	handleAddEvent: (newEvent: Event) => void;
	showModal: boolean;
	setShowModal: (show: boolean) => void;
	onCloseModal: (show: boolean) => void;
	setDisplayEvent: (show: boolean) => void;
	events: Event[];
}

const Calendar: React.FC<Props> = ({
	days,
	year,
	month,
	emptyCells,
	handleNextMonth,
	handlePrevMonth,
	showModal,
	setShowModal,
	onCloseModal,
	setDisplayEvent,
	events,
}) => {
	const [selectedDate, setSelectedDate] = useState<number | null>(null);

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
