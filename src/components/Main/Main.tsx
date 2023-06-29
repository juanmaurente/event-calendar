import { useState, useEffect } from 'react';
import './Main.scss';
import Calendar from '../Calendar/Calendar';
import { Event } from '../../utils/types';
import EventsList from '../EventsList/EventsList';
import Modal from '../Modal/Modal';

const Main = () => {
	const [showModal, setShowModal] = useState(false);
	const [events, setEvents] = useState<Event[]>([
		{
			name: 'Complete Event-Calendar Project',
			startDate: new Date('2023-06-17'),
			endDate: new Date('2023-06-30'),
			location: 'Sydney',
			label: 'Study',
		},
		{
			name: 'Complete Event-Calendar Project',
			startDate: new Date('2023-06-29'),
			endDate: new Date('2023-06-30'),
			location: 'Sydney',
			label: 'Study',
		},
	]);
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
	}, [events, showModal]);

	return (
		<div className='container'>
			<EventsList
				events={events}
				setShowModal={setShowModal}
				setDisplayForm={setDisplayForm}
			/>
			<Calendar
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
