import { Event } from '../Form/types';
import './EventCard.scss';

interface Props {
	event: Event;
}

const EventCard: React.FC<Props> = ({ event }) => {
	const months = [
		'Ene',
		'Feb',
		'Mar',
		'Abr',
		'May',
		'Jun',
		'Jul',
		'Ago',
		'Sep',
		'Oct',
		'Nov',
		'Dic',
	];

	const startDate = new Date(event.startDate);
	const formattedStartDate = `${startDate.getDate()} ${
		months[startDate.getMonth()]
	}`;

	return (
		<div className='card-container'>
			<div className='card-date'>{formattedStartDate}</div>
			<div className='card-info'>
				<h4>{event.name}</h4> <p>{event.location}</p>
			</div>
		</div>
	);
};

export default EventCard;
