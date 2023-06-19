import { useState } from 'react';
import Modal from '../Modal/Modal';
import './Cell.scss';

interface Props {
	date?: number;
	setSelectedDate: (date: number | null) => void;
	showModal: boolean;
	setShowModal: (show: boolean) => void;
}

const Cell: React.FC<Props> = ({
	date,
	setSelectedDate,
	showModal,
	setShowModal,
}) => {
	const handleCloseModal = () => {
		setShowModal(false);
	};

	const handleClick = () => {
		if (date !== undefined) {
			setSelectedDate(date);
			setShowModal(true);
		}
	};

	return (
		<div className='calendar-cell' onClick={handleClick}>
			{date !== undefined ? date : ''}
			{showModal && <Modal onClose={handleCloseModal} />}
		</div>
	);
};

export default Cell;
