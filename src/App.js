import Container from './components/layout/Container';
import Card from './components/layout/Card';
import NoteCard from './components/layout/NoteCard';
import ModalForm from './components/project/ModalForm';

import { useState, useEffect } from 'react';

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notes, setNotes] = useState([]);

  // Loading of notes when the page is up
  useEffect(() => {
    fetch('http://localhost:5000/notes', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
    .then((resp) => resp.json())
    .then((data) => {
      setNotes(data);
    })
    .catch((err) => {
      console.log(`Ocorreu um erro: ${err}`);
    })
  }, []);

  // Function that add notes to a new array
  // and set the notes State
  const createNote = (note) => {
    fetch('http://localhost:5000/notes', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(note),
    })
    .then((resp) => resp.json())
    .then((data) => {
      let newNote = [...notes, data];
      setNotes(newNote);
      setIsModalOpen(false);
    })
    .catch((err) => {
      console.log(`Ocorreu um erro: ${err}`);
    })
  }

  
 /* const addNote = (note) => {
    const newNote = [...notes, note];
    setNotes(newNote);

    setIsModalOpen(false);
    
    console.log(newNote);
  } */

  // Close Modal by clicking the X button
  const closeModal = (e) => {
    e.preventDefault();

    setIsModalOpen(false);
  }

  // Close Modal by clicking outside of it
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
          handleSubmit={createNote}
        />
      )}
      {notes && (
        notes.map((note) => (
          <NoteCard 
            key={note.id}
            title={note.title}
            content={note.description}
            date={note.datenote}
          />
        ))
      )}
    </Container>
  );
}

export default App;
