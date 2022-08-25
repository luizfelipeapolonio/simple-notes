import HeaderForm from '../form/HeaderForm';
import Input from '../form/Input';
import TextArea from '../form/TextArea';
import SubmitButton from '../form/SubmitButton';

import styles from './ModalForm.module.css';

import { useState } from 'react';

function ModalForm({ stateModal, outsideClick, handleSubmit  }) {

    const [notes, setNotes] = useState();

    const date = new Date();
    const options = {
        day: 'numeric', 
        month: 'long', 
        year: 'numeric',
    }
    const fullDate = date.toLocaleString('default', options);
    const finalDate = fullDate.replaceAll(' de', ',');

    // Getting the values of inputs and setting the notes State
    const handleChange = (e) => {
        setNotes({...notes, [e.target.name]: e.target.value});
    }

    // Submit the notes by the prop handleSubmit as a function
    const submit = (e) => {
        e.preventDefault();

        handleSubmit(notes);
        console.log(finalDate);
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