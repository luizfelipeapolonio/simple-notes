import HeaderForm from '../form/HeaderForm';
import Input from '../form/Input';
import TextArea from '../form/TextArea';
import SubmitButton from '../form/SubmitButton';

import styles from './ModalForm.module.css';

import { useState, useEffect } from 'react';

function EditModalForm({ stateModal, outsideClick, handleSubmit, edit }) {

    // Getting date
    const date = new Date();
    const fullDate = date.toLocaleDateString();

    const [id] = useState(edit[0].id);
    const [notes, setNotes] = useState({datenote: fullDate, id});
    const [title, setTitle] = useState(edit[0].title ? edit[0].title : '');
    const [description, setDescription] = useState(
        edit[0].description ? edit[0].description : ''
    );
    
    // Fill notes array when the modal is up and
    // when there are changes in the inputs value
    useEffect(() => {
        setNotes((currentNote) => ({...currentNote, title, description}));
    }, [title, description]);

    // Getting the values of inputs and setting the notes State
    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleDescription = (e) => {
        setDescription(e.target.value);
    }

    // console.log(title);
    // console.log(description);
    console.log(notes);

    // Submit the edited note by the prop handleSubmit as a function
    const submit = (e) => {
        e.preventDefault();
        
        handleSubmit(notes);
    }

    return (
        <div id="modal" className={styles.fade} onClick={outsideClick}>
            <div className={styles.container_form}>
                <form className={styles.form} onSubmit={submit}>
                    <HeaderForm title="Editar Nota" onClose={stateModal}/>
                    <Input 
                        type="text"
                        name="title"
                        text="Título"
                        placeholder="Dê um título a sua nota"
                        handleOnChange={handleTitle}
                        value={title}
                    />
                    <TextArea 
                        text="Descrição"
                        name="description"
                        placeholder="Faça suas anotações..."
                        handleOnChange={handleDescription}
                        value={description}
                    />
                    <SubmitButton 
                        btnText="Salvar"
                    />
                </form>
            </div> 
        </div>
    );
}

export default EditModalForm;