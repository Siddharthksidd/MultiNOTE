import React from 'react';
import FormatColorResetIcon from '@mui/icons-material/FormatColorReset';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';

function ThemePallet(props) {

    //passing the clicked color to parent
    function colorHandler(e){
        props.colorHandler(e.target.id)
    }

     //passing the clicked text color to parent
    function txtHandler(e){
        props.txtHandler(e.target.id)
    }

    return (
        <div class="theme">
                <div class="themecontainer">
                    <Zoom in="true"><Fab tabIndex = "-1" onClick={colorHandler} class="themeColor" id="transparent"><FormatColorResetIcon onClick={colorHandler} id="transperent"/></Fab></Zoom>
                    <Zoom in="true"><Fab tabIndex = "-1" onClick={colorHandler} class="themeColor" id="red"></Fab></Zoom>
                    <Zoom in="true"><Fab tabIndex = "-1" onClick={colorHandler} class="themeColor" id="orange"></Fab></Zoom>
                    <Zoom in="true"><Fab tabIndex = "-1" onClick={colorHandler} class="themeColor" id="lightblue"></Fab></Zoom>
                    <Zoom in="true"><Fab tabIndex = "-1" onClick={colorHandler} class="themeColor" id="blue"></Fab></Zoom>
                </div>
                <div class="themecontainer">
                    <Zoom in="true"><Fab tabIndex = "-1" onClick={colorHandler} class="themeColor" id="yellow"></Fab></Zoom>
                    <Zoom in="true"><Fab tabIndex = "-1" onClick={colorHandler} class="themeColor" id="green"></Fab></Zoom>
                    <Zoom in="true"><Fab tabIndex = "-1" onClick={colorHandler} class="themeColor" id="pink"></Fab></Zoom>
                    <Zoom in="true"><Fab tabIndex = "-1" onClick={txtHandler} class="themeColor themetext-black" id="black">T</Fab></Zoom>
                    <Zoom in="true"><Fab tabIndex = "-1" onClick={txtHandler} class="themeColor themetext-white" id="white">T</Fab></Zoom>
                </div>
        </div>
        );
};  

export default ThemePallet