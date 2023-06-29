import React from 'react';
import './Modal.scss';
import Form from '../Form/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Event } from '../../utils/types';

interface Props {
	onClose: () => void;
	handleAddEvent: (newEvent: Event) => void;
	displayEvent: boolean;
	displayForm: boolean;
}

const Modal: React.FC<Props> = ({
	onClose,
	handleAddEvent,
	displayEvent,
	displayForm,
}) => {
	return (
		<div className='modal-overlay'>
			<div className='modal-content'>
				<div className='close-button'>
					<button onClick={onClose}>
						<FontAwesomeIcon icon={faClose as IconProp} />
					</button>
				</div>
				{displayForm && <Form handleAddEvent={handleAddEvent} />}
				{displayEvent && <h1>Casi Casi</h1>}
			</div>
		</div>
	);
};

export default Modal;
