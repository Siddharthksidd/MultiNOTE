import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
// import ColorLensIcon from '@mui/icons-material/ColorLens';
// import ThemePallet from './ThemePallet';

function InputNote(props) {
    const [note, setNote] = React.useState({title: "", content: ""});
    const [expandstate, setexpand] = React.useState(false);
    // const [expandtme, setexptme] = React.useState(false)
    // const [tcolor, settcolor] = React.useState("#FFF");

    // function expandtheme(){
    //     expandtme ? setexptme(false) : setexptme(true);
    // }

    function expandHandler(){
        // expandstate ? setexpand(false) :
        setexpand(true);
    };

    function changeHandler(event){
        const {name, value} = event.target;
        setNote(prevNote => { return{
            ...prevNote, [name]: value
        };
        });
    }

    function submitNote(event){
        props.addNote(note)
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    };
    
    function handleKeyPress(event){
        if(event.key === 'Enter'){
            submitNote(event);
        }
    }

    // function ChangeColor(tmeColor){
    //     settcolor(tmeColor);
    // };

    return (
        <div>
            <form>
            {expandstate && <input onKeyDown={handleKeyPress} onChange={changeHandler} name="title" placeholder='Title' value={note.title}></input>}
            <textarea  onChange={changeHandler} onClick={expandHandler} name="content" placeholder='Type to note' rows={expandstate ? "3" : "1"} value={note.content}></textarea>
            {expandstate && <Zoom in="true"><Fab aria-label="add" onClick={submitNote} class="addButton"><AddIcon /></Fab></Zoom>}
            {/* {expandstate && <Zoom in="true"><Fab aria-label="theme" onClick={expandtheme} class="themeButton"><ColorLensIcon /></Fab></Zoom>} */}
            </form>
            {/* {expandtme && <ThemePallet changeColor = {ChangeColor}/>} */}
        </div>
    );
};

export default InputNote;