import React from 'react';
import './Modal.scss';
import Form from '../From/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Event } from '../From/types';

interface Props {
	onClose: () => void;
	handleAddEvent: (newEvent: Event) => void;
}

const Modal: React.FC<Props> = ({ onClose, handleAddEvent }) => {
	return (
		<div className='modal-overlay'>
			<div className='modal-content'>
				<div className='close-button'>
					<button onClick={onClose}>
						<FontAwesomeIcon icon={faClose as IconProp} />
					</button>
				</div>
				<Form handleAddEvent={handleAddEvent} />
			</div>
		</div>
	);
};

export default Modal;
