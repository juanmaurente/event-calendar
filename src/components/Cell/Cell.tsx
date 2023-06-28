import Modal from '../Modal/Modal';
import './Cell.scss';

interface Props {
	date?: number;
	setSelectedDate: (date: number | null) => void;
	showModal: boolean;
	setShowModal: (show: boolean) => void;
	setDisplayEvent: (show: boolean) => void;
	onCloseModal: (show: boolean) => void;
}

const Cell: React.FC<Props> = ({
	date,
	setSelectedDate,
	showModal,
	setShowModal,
	setDisplayEvent,
}) => {
	const handleClick = () => {
		if (date !== undefined) {
			setSelectedDate(date);
			setShowModal(true);
			setDisplayEvent(true);
		}
	};

	return (
		<div className='calendar-cell' onClick={handleClick}>
			{date !== undefined ? date : ''}
		</div>
	);
};

export default Cell;
