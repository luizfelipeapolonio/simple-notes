import Container from './components/layout/Container';
import Card from './components/layout/Card';
import NoteCard from './components/layout/NoteCard';
import ModalForm from './components/project/ModalForm';

import { useState } from 'react';

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fechar modal clicando no botão X
  const closeModal = (e) => {
    e.preventDefault();

    setIsModalOpen(false);
  }

  // Fechar Modal clicando fora dele
  const handleOutsideClick = (e) => {
    if(e.target.id === "modal"){
        setIsModalOpen(false);
      }
  }

  return (
    <Container>
      <Card handleOpenModal={() => setIsModalOpen(true)}/>
      {isModalOpen && (
        <ModalForm 
          stateModal={closeModal} 
          outsideClick={handleOutsideClick}
        />
      )}
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
    </Container>
  );
}

export default App;
