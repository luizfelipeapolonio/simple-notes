import logo from '../../img/nota_logo.png';

import styles from './Container.module.css';

import { FaEllipsisV } from 'react-icons/fa';

function Container({ children }) {
    return (
        <div className={styles.main_container} id="">
            <div className={styles.notes_container}>
                <div className={styles.top_bar}>
                    <div className={styles.logo}>
                        <img src={logo} alt="Logo"/><span>Simple Notes</span>
                    </div>
                    <button>
                        <FaEllipsisV />
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
}

export default Container;