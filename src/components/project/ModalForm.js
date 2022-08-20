import HeaderForm from '../form/HeaderForm';
import Input from '../form/Input';
import TextArea from '../form/TextArea';
import SubmitButton from '../form/SubmitButton';

import styles from './ModalForm.module.css';

function ModalForm({ stateModal, outsideClick }) {
    return (
        <div id="modal" className={styles.fade} onClick={outsideClick}>
            <div className={styles.container_form}>
                <form className={styles.form}>
                    <HeaderForm title="Adicionar Nota" onClose={stateModal}/>
                    <Input 
                        type="text"
                        name="title"
                        text="Título"
                        placeholder="Dê um título a sua nota"
                    />
                    <TextArea 
                        text="Descrição"
                        name="content"
                        placeholder="Faça suas anotações..."
                    />
                    <SubmitButton 
                        text="Adicionar Nota" 
                    />
                </form>
            </div> 
        </div>
    );
}

export default ModalForm;