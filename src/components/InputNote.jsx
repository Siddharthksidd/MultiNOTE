import React, { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ThemePallet from './ThemePallet';

function InputNote(props) {
    
    //note form change state
    const [note, setNote] = useState({title: "", content: "", noteColor: "", notetxtColor:""});
    //on click form expand state
    const [expandstate, setexpand] = useState(false);
    //on click theme pallet expand state
    const [expandtme, setexptme] = useState(false)
    //on click selected theme state
    const [tmeColor, setColor] = useState({bg: "", txt: ""})
    
    //on enter submit note handler function
    function handleKeyPress(event){
        if(event.key === 'Enter'){
            submitNote(event)}}
    
    //onchange of input and textarea handler function
    function changeHandler(event){
        const {name, value} = event.target;
        setNote(prevNote => { return{
            ...prevNote, [name]: value
        };});}
        
    //onclick expand form function
    function expandHandler(){setexpand(true)};
    
    //onclick of button submit notes function
    function submitNote(event){
        props.addNote(note)
        setNote({
            title: "",
            content: "",
            noteColor: "#FFF", 
            notetxtColor: "black"
        });
        setColor({bg: "#FFF", txt: "black"});
        event.preventDefault();
    }

    //onclick theme button expand theme pallet function
    function expandtheme(){
        expandtme ? setexptme(false) : setexptme(true);
    }

    //set note color function
    function colorHandler(colortme){
        setColor(prevColor => ({...prevColor,bg: colortme}));
    };
    
    //set note txt color function
    function txtHandler(txttme){
        setColor(prevColor => ({...prevColor,txt: txttme}));
    };
    
    //adding note theme data to note state

    useEffect(() => {ChangeColor(tmeColor)}, [tmeColor]);

    function ChangeColor(tmeColor){
        setNote(prevNote => { return{
            ...prevNote, 
            noteColor: tmeColor.bg, 
            notetxtColor: tmeColor.txt
        };
        });
    };

    return (
        <div className='createNoteArea'>
            <form  className="inputForm" style={{background: note.noteColor}}>

                {/* Note title input start*/}
                {expandstate && <input 
                style={{color: note.notetxtColor}} 
                onKeyDown={handleKeyPress} 
                onChange={changeHandler} 
                name="title" 
                placeholder='Title' 
                value={note.title}></input>}
                {/* Note title input end*/}

                {/* Note content input start*/}
                <textarea 
                style={{color: note.notetxtColor}} 
                onChange={changeHandler} 
                onClick={expandHandler} 
                name="content" 
                placeholder='Type to note' 
                rows={expandstate ? "3" : "1"} 
                value={note.content}></textarea>
                {/* Note content input end*/}

                {/* Note add button start*/}
                {expandstate && 
                    <Zoom in="true">
                        <Fab  
                        tabIndex = "-1"  
                        aria-label="add" 
                        onClick={submitNote} 
                        class="addButton">
                            <AddIcon />
                        </Fab>
                    </Zoom>}
                {/* Note add button end*/}

                {/* Note theme button start*/}
                {expandstate && 
                    <Zoom in="true">
                        <Fab 
                        tabIndex = "-1" 
                        aria-label="theme" 
                        onClick={expandtheme} 
                        class="themeButton">
                            <ColorLensIcon />
                        </Fab>
                    </Zoom>}
                {/* Note theme button end*/}
            
            </form>

            <div className="themeInput">
                {/* theme pallet*/}
                {expandtme && 
                <ThemePallet 
                colorHandler = {colorHandler}
                txtHandler = {txtHandler}
                />}
            </div>
        </div>
    );
};

export default InputNote