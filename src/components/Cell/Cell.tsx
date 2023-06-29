import './Cell.scss';

interface Props {
	date?: number;
	setSelectedDate: (date: number | null) => void;
	showModal: boolean;
	setShowModal: (show: boolean) => void;
	setDisplayEvent: (show: boolean) => void;
	onCloseModal: (show: boolean) => void;
	hasEvents: boolean;
}

const Cell: React.FC<Props> = ({
	date,
	setSelectedDate,
	setShowModal,
	setDisplayEvent,
	hasEvents,
}) => {
	const handleClick = () => {
		if (date !== undefined) {
			setSelectedDate(date);
			setShowModal(true);
			setDisplayEvent(true);
		}
	};

	return (
		<div
			className={`calendar-cell ${hasEvents ? 'has-events' : ''}`}
			onClick={handleClick}>
			{date !== undefined ? date : ''}
		</div>
	);
};

export default Cell;
