import styles from './TextArea.module.css';

function TextArea({ name, text, placeholder, handleOnChange }) {
    return (
        <div className={styles.form_textarea}>
            <label htmlFor={name}>{text}:</label>
                <textarea 
                    id={name} 
                    name={name}
                    placeholder={placeholder}
                    rows="4" 
                    cols="50"
                    onChange={handleOnChange}
                >
                </textarea>
        </div>
    );
}

export default TextArea;