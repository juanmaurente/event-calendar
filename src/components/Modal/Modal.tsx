import React from 'react';
import './Modal.scss';

interface Props {
	onClose: () => void;
}

const Modal: React.FC<Props> = ({ onClose }) => {
	return (
		<div className='modal-overlay'>
			<div className='modal-content'>
				<h2>Modal Title</h2>
				<p>Modal Content</p>
				<button onClick={onClose}>Close</button>
			</div>
		</div>
	);
};

export default Modal;
