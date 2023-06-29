import './EventsList.scss';
import { Event } from '../../utils/types';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import EventCard from '../EventCard/EventCard';

interface Props {
	events: Event[];
	setShowModal: (show: boolean) => void;
	setDisplayForm: (show: boolean) => void;
}

const EventsList: React.FC<Props> = ({
	events,
	setShowModal,
	setDisplayForm,
}) => {
	const handleClick = () => {
		setShowModal(true);
		setDisplayForm(true);
	};

	return (
		<div className='events-container'>
			<div className='new-event'>
				<button onClick={handleClick}>
					<FontAwesomeIcon icon={faPlus as IconProp} />
				</button>
			</div>

			{events.length == 0 ? (
				<p>No events</p>
			) : (
				events.map((event) => (
					<EventCard key={uuidv4()} event={event} />
				))
			)}
		</div>
	);
};

export default EventsList;
