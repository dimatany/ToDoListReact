import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;
	
	return (
		<div className={styles.modalOverlay}>
			<div className={styles.modal}>
				<button className={styles.closeButton} onClick={onClose}>
					&#215;
				</button>
				{children}
			</div>
		</div>
	);
};

export default Modal;