import styles from './SubmitButton.module.css';

function SubmitButton({ btnText, handleAction }) {
    return (
        <>
            <button 
                className={styles.add_button}
                onClick={handleAction}
            >
                {btnText}
            </button>
        </>
        
    );
}

export default SubmitButton;