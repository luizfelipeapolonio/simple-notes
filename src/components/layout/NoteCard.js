import styles from './NoteCard.module.css';

import { FaPen, FaTrash } from 'react-icons/fa';

function NoteCard({ id, title, content, date, handleRemove, handleEdit }) {

    // Remove notecard
    const remove = () => {
        handleRemove(id);
    }

    const edit = () => {
        handleEdit(id);
    }

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
                    <p>{date}</p>
                </div>
                <div>
                    <button 
                        className={styles.btn_edit} 
                        onClick={edit}
                    >
                        <FaPen />
                    </button>
                    <button 
                        className={styles.btn_delete} 
                        onClick={remove}
                    >
                        <FaTrash />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NoteCard;