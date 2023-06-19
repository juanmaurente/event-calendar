import React from 'react';
import './Modal.scss';
import Form from '../From/Form';

interface Props {
	onClose: () => void;
}

const Modal: React.FC<Props> = ({ onClose }) => {
	return (
		<div className='modal-overlay'>
			<div className='modal-content'>
				<button onClick={onClose}>X</button>
				<Form />
			</div>
		</div>
	);
};

export default Modal;
