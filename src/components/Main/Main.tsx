import { useState, useEffect } from 'react';
import './Main.scss';
import Calendar from '../Calendar/Calendar';
import { Event } from '../Form/types';
import EventsList from '../EventsList/EventsList';
import Modal from '../Modal/Modal';

const Main = () => {
	const [showModal, setShowModal] = useState(false);
	const [events, setEvents] = useState<Event[]>([]);
	const [displayForm, setDisplayForm] = useState(false);
	const [displayEvent, setDisplayEvent] = useState(false);

	const handleAddEvent = (newEvent: Event) => {
		setEvents((prevEvents) => [...prevEvents, newEvent]);
		console.log(events);
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
