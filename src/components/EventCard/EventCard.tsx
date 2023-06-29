import { Event } from '../Form/types';
import './EventCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEye, faPencil } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

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
				<h4>{event.name}</h4>
			</div>
			<div className='card-buttons'>
				<ul className='list-icons'>
					<li>
						<button onClick={() => console.log('View')}>
							<FontAwesomeIcon icon={faEye as IconProp} />
						</button>
					</li>
					<li>
						<button
							id='view-button'
							onClick={() => console.log('Edit')}>
							<FontAwesomeIcon icon={faPencil as IconProp} />
						</button>
					</li>
					<li>
						<button
							id='view-button'
							onClick={() => console.log('Delete')}>
							<FontAwesomeIcon icon={faTrash as IconProp} />
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default EventCard;
