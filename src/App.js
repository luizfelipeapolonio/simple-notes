import Container from './components/layout/Container';
import Card from './components/layout/Card';
import NoteCard from './components/layout/NoteCard';
import ModalForm from './components/modal/ModalForm';
import EditModalForm from './components/modal/EditModalForm';

import { useState, useEffect } from 'react';

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [notes, setNotes] = useState([]);
  const [noteToEdit, setNoteToEdit] = useState();

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

  // Remove note from database and update notes array State
  // after fulfilled response
  const removeNote = (id) => {
    fetch(`http://localhost:5000/notes/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    })
    .then((resp) => resp.json())
    .then(() => {
      // State update function
      updateState(id);
    })
    .catch((err) => {
      console.log(`Ocorreu um erro: ${err}`);
    })
  }

  // Update notes array State after removing it
  const updateState = (id) => {
    let remove = notes.filter((note) => {
      return note.id !== id
    });

    setNotes(remove);
  }

  
  // Edit and update the note
  const submitEditedNote = (editedNote) => {
    fetch(`http://localhost:5000/notes/${editedNote.id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(editedNote),
    })
    .then((resp) => resp.json())
    .then((data) => {
      let update = notes.filter((note) => {
        return note.id !== data.id
      });
      
      let newArray = [data, ...update];

      setNotes(newArray);
      setIsEditModalOpen(false);
    })
    .catch((err) => {
      console.log(`Ocorreu um erro: ${err}`);
    })
  }

  // Get the note data to edit
  const editNote = (id) => {
    let note = notes.filter((note) => {
        return note.id === id
    });

    setIsEditModalOpen(true);
    setNoteToEdit(note);
    console.log(note);
  }

  // Edit Modal
  // Close Edit Modal by clicking the X button
  const closeEditModal = (e) => {
    e.preventDefault();

    setIsEditModalOpen(false);
  }

  // Close Modal by clicking outside of it
  const handleEditOutsideClick = (e) => {
    if(e.target.id === "modal"){
        setIsEditModalOpen(false);
      }
  }


  // Add Modal
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
      {isEditModalOpen && (
        <EditModalForm 
          stateModal={closeEditModal} 
          outsideClick={handleEditOutsideClick}
          handleSubmit={submitEditedNote}
          edit={noteToEdit}
      />
      )}
      {notes && (
        notes.map((note) => (
          <NoteCard
            id={note.id} 
            key={note.id}
            title={note.title}
            content={note.description}
            date={note.datenote}
            handleRemove={removeNote}
            handleEdit={editNote}
          />
        ))
      )}
    </Container>
  );
}

export default App;
