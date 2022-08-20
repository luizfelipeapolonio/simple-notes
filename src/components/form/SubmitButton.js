import styles from './SubmitButton.module.css';

function SubmitButton({ text }) {
    return (
        <>
            <button className={styles.add_button}>{text}</button>
        </>
        
    );
}

export default SubmitButton;