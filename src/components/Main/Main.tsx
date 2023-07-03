import { useState, useEffect } from 'react';
import './Main.scss';
import Calendar from '../Calendar/Calendar';
import MonthNames from '../../utils/MonthNames';
import { Event } from '../../utils/types';
import EventsList from '../EventsList/EventsList';
import Modal from '../Modal/Modal';

const Main = () => {
	const [showModal, setShowModal] = useState(false);
	const [events, setEvents] = useState<Event[]>([
		{
			name: 'Complete Event-Calendar Project',
			startDate: new Date('2023-06-30'),
			endDate: new Date('2023-06-30'),
			location: 'Sydney',
			label: 'Study',
		},
	]);
	const [currentMonth, setCurrentMonth] = useState(new Date());

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
	const [displayForm, setDisplayForm] = useState(false);
	const [displayEvent, setDisplayEvent] = useState(false);

	const handleAddEvent = (newEvent: Event) => {
		setEvents((prevEvents) => [...prevEvents, newEvent]);
		setShowModal(false);
		console.log([...events, newEvent]);
	};

	const handleCloseModal = () => {
		setShowModal(false);
		setDisplayEvent(false);
		setDisplayForm(false);
	};

	useEffect(() => {
		console.log(events);
		console.log(showModal);
		console.log(days);
	}, [events, showModal, days]);

	return (
		<div className='container'>
			<EventsList
				events={events}
				setShowModal={setShowModal}
				setDisplayForm={setDisplayForm}
			/>
			<Calendar
				emptyCells={emptyCells}
				handleNextMonth={handleNextMonth}
				handlePrevMonth={handlePrevMonth}
				days={days}
				year={year}
				month={month}
				handleAddEvent={handleAddEvent}
				showModal={showModal}
				setShowModal={setShowModal}
				onCloseModal={handleCloseModal}
				setDisplayEvent={setDisplayEvent}
				events={events}
			/>
			{showModal && (
				<Modal
					displayForm={displayForm}
					displayEvent={displayEvent}
					onClose={handleCloseModal}
					handleAddEvent={handleAddEvent}
				/>
			)}
		</div>
	);
};

export default Main;
