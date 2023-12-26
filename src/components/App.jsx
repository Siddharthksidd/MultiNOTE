import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import InputNote from './InputNote';
import Note from './Note';

function App() {
    // Notes state
    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("noteList")));
    
    // LocalStorage
    useEffect(() => (localStorage.setItem("noteList", JSON.stringify(notes))),[])

    useEffect(() => (localStorage.setItem("noteList", JSON.stringify(notes))),[notes])

    // Add Note on button click function
    function AddNote(note){
        setNotes(prevNotes => [...prevNotes, note]);
    };

    // Delete Note on button click function
    function DeleteNote(id) {
      setNotes(prevNotes => prevNotes.filter((noteItem, index) => index !== id));
    }

    // Save edited note on done function
    function saveNote(editedNote, id){
        const editednotes = notes.map((note, index) => index === editedNote.id ? editedNote : note)
        setNotes(editednotes);
    }
  
  return (
    <div>
        <Header />
        <main>
        <InputNote addNote={AddNote}/>
        <div className='dispayNote'>
        {notes.map((noteItem, index) => {
            return(
              <Note 
              id = {index}
              key = {index}
              title = {noteItem.title}
              content = {noteItem.content}
              noteColor = {noteItem.noteColor}
              notetxtColor = {noteItem.notetxtColor}
              deleteNote = {DeleteNote}
              editNote={saveNote}
              />)
        }).reverse()}
        </div>
        </main>
        <Footer />
    </div>
  )
}

export default App