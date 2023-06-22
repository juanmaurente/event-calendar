import React from 'react';
import './Modal.scss';
import Form from '../From/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Props {
	onClose: () => void;
}

const Modal: React.FC<Props> = ({ onClose }) => {
	return (
		<div className='modal-overlay'>
			<div className='modal-content'>
				<div className='close-button'>
					<button onClick={onClose}>
						<FontAwesomeIcon icon={faClose as IconProp} />
					</button>
				</div>
				<Form />
			</div>
		</div>
	);
};

export default Modal;
