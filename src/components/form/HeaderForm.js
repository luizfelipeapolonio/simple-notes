import styles from './HeaderForm.module.css';

import { FaTimes } from 'react-icons/fa';

function HeaderForm({ title, onClose }) {
    return (
        <div className={styles.header}>
            <header>
                <h3>{title}</h3>
            </header>
            <button onClick={onClose}>
                <FaTimes />
            </button>
        </div>
    );
}

export default HeaderForm;