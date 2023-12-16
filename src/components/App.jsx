import React from 'react';
import Header from './Header';
import Footer from './Footer';
import InputNote from './InputNote';
import Note from './Note';
// import ThemePallet from './ThemePallet';

function App() {
    const [notes, setNotes] = React.useState([]);

    function AddNote(note){
        setNotes(prevNotes => {
        return [...prevNotes, note];
        });
    };

    function DeleteNote(id) {
      setNotes(prevNotes => {
        return prevNotes.filter((noteItem, index) => {
          return index !== id;
        });
      });
    }

    

  return (
    <div>
        <Header />
        <InputNote addNote={AddNote}/>
        {notes.map((noteItem, index) => {
            return(
        <Note 
        id = {index}
        key = {index}
        title = {noteItem.title}
        content = {noteItem.content} 
        deleteNote = {DeleteNote}
        />)
        })}
        <Footer />
    </div>
  )
}

export default App