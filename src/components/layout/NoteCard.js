import styles from './NoteCard.module.css';

import { FaPen, FaTrash } from 'react-icons/fa';

function NoteCard({ title, content, date }) {
    return (
        <div className={styles.container}>
            <h3>{title}</h3>
            <div className={styles.note_content}>
                <p>
                    {content}
                </p>
            </div>
            <div className={styles.note_buttons}>
                <div className={styles.date}>
                    <p>25, Agosto, 2022</p>
                </div>
                <div>
                    <button className={styles.btn_edit}>
                        <FaPen />
                    </button>
                    <button className={styles.btn_delete}>
                        <FaTrash />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NoteCard;