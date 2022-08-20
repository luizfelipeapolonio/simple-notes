import styles from './Card.module.css';

import { FaPlus } from 'react-icons/fa';

function Card({ handleOpenModal }) {
    return (
        <div className={styles.container}>
            <div className={styles.add_button}>
                <button onClick={handleOpenModal}>
                    <FaPlus />
                </button>
            </div>
            <div className={styles.add_legend}>
                <p>Adicionar Nota</p>
            </div>
        </div>
    );
}

export default Card;