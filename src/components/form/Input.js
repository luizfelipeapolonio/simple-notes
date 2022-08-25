import styles from './Input.module.css';

function Input({ type, name, text, placeholder, handleOnChange }) {
    return (
        <div className={styles.form_input}>
            <label htmlFor={name}>{text}:</label>
            <input 
                type={type} 
                name={name} 
                placeholder={placeholder}
                onChange={handleOnChange}
            />
        </div>
    );
}

export default Input;