import React, { useState } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Fab from '@mui/material/Fab';
import { MdEdit } from "react-icons/md";
import { MdDone } from "react-icons/md";

function Note(props) {
    //conditional rendering state of note editing
    const [editable, setEditable] = useState(false)
    //new edited note state
    const [editNote, setEditNote] = useState({})

    //edited note change handler
    function handleChange(event){
        const {name, value} = event.target;
        setEditNote(prevNote => { return{
            ...prevNote, [name]: value
        };
        });
    }

    //onclick delete note handler
    function clickHandler(){
        props.deleteNote(props.id);
    };

    //onclick done submit edited note
    function editdoneHandler(id){
        setEditable(false);
        props.editNote(editNote, id)
    }

    //onclick enter editmode 
    function editHandler(){
        setEditable(true);
        setEditNote({id: props.id, title: props.title, content: props.content, noteColor: props.noteColor, notetxtColor: props.notetxtColor})
        console.log(editNote)
    };

    return (
        <div 
            className='noteCard' 
            style={{backgroundColor: props.noteColor, color: props.notetxtColor}}>
            
            {editable ?
                <form className='noteForm'>
                    <input
                        className='editNoteTitle'
                        name="title"
                        onChange={handleChange}
                        value={editNote.title}
                        placeholder="Title"
                    />
                    <textarea
                        className='editNoteContent'
                        name="content"
                        onChange={handleChange}
                        value={editNote.content}
                        placeholder="Take a note..."
                        rows="3"
                    /> 
                </form>
            :
                <>
                <h2>{props.title}</h2>
                <p>{props.content}</p></>
            }

            <div className='notecardDBtn'>
            <Fab 
            aria-label="delete"
            onClick={clickHandler} 
            className="deleteButton">
                <DeleteOutlineIcon />
            </Fab>
            </div>

            <div className='notecardEBtn'>
                {editable ? 
                <Fab 
                aria-label="Done"
                onClick={editdoneHandler}
                className="editButton">
                    <MdDone />
                </Fab>
                :<Fab 
                    aria-label="Edit"
                    onClick={editHandler}
                    className="editButton">
                        <MdEdit />
                </Fab>}
            </div>

        </div>
    )   
}

export default Note