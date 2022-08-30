import styles from './TextArea.module.css';

function TextArea({ name, text, placeholder, handleOnChange, value }) {
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
                    value={value}
                >
                </textarea>
        </div>
    );
}

export default TextArea;