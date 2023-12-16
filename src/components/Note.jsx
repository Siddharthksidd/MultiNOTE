import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import IconButton from '@mui/material/IconButton';

function Note(props) {

    // var input = document.getElementsByClassName("myInput");
    // console.log(input);
    // input.addEventListener("keypress", function(event) {
    //     // If the user presses the "Enter" key on the keyboard
    //     if (event.key === "Enter") {
    //       // Cancel the default action, if needed
    //       event.preventDefault();
    //       // Trigger the button element with a click
    //       document.getElementsByClassName("deleteButton").click();
    //     }
    //   });

    function clickHandler(){
        props.deleteNote(props.id);
    };

    return (
        <div class="noteCard">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <IconButton aria-label="delete" onClick={clickHandler} class="deleteButton"><DeleteOutlineIcon /></IconButton>
        </div>
    )
}

export default Note