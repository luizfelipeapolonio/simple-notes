import HeaderForm from '../form/HeaderForm';
import Input from '../form/Input';
import TextArea from '../form/TextArea';
import SubmitButton from '../form/SubmitButton';

import styles from './ModalForm.module.css';

import { useState } from 'react';

function ModalForm({ stateModal, outsideClick, handleSubmit }) {

    // Getting date
    const date = new Date();
    const fullDate = date.toLocaleDateString();

    const [notes, setNotes] = useState({datenote: fullDate});

    // Getting the values of inputs and setting the notes State
    const handleChange = (e) => {
        setNotes({...notes, [e.target.name]: e.target.value});
    }

    // Submit the notes by the prop handleSubmit as a function
    const submit = (e) => {
        e.preventDefault();
        
        handleSubmit(notes);
    }

    return (
        <div id="modal" className={styles.fade} onClick={outsideClick}>
            <div className={styles.container_form}>
                <form className={styles.form} onSubmit={submit}>
                    <HeaderForm title="Adicionar Nota" onClose={stateModal}/>
                    <Input 
                        type="text"
                        name="title"
                        text="Título"
                        placeholder="Dê um título a sua nota"
                        handleOnChange={handleChange}
                    />
                    <TextArea 
                        text="Descrição"
                        name="description"
                        placeholder="Faça suas anotações..."
                        handleOnChange={handleChange}
                    />
                    <SubmitButton 
                        btnText="Adicionar Nota"
                    />
                </form>
            </div> 
        </div>
    );
}

export default ModalForm;