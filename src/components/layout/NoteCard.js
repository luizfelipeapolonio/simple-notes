import styles from './NoteCard.module.css';

import { FaPen, FaTrash } from 'react-icons/fa';

function NoteCard({ title, content, date }) {
    return (
        <div className={styles.container}>
            <h3>Título 1</h3>
            <div className={styles.note_content}>
                <p>Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown 
                    printer took a galley of type and scrambled it to make 
                    a type specimen book.
                    Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown 
                    printer took a galley of type and scrambled it to make 
                    a type specimen book. 
                </p>
            </div>
            <div className={styles.note_buttons}>
                <div className={styles.date}>
                    <p>18, Agosto</p>
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