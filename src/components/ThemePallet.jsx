// import React from 'react';
// import FormatColorResetIcon from '@mui/icons-material/FormatColorReset';
// import Zoom from '@mui/material/Zoom';
// import Fab from '@mui/material/Fab';

// function ThemePallet(props) {

//   const [tmeColor, setColor] = React.useState("#FFF")

//   function colorHandler(event){
//     const colortme = event.target.id;
//     setColor(colortme);
//     props.changeColor(tmeColor);
//   };

//   return (
//     <div class="theme">
//         <Zoom in="true"><Fab onClick={colorHandler} id="transparent" class="themeColor transparant" ><FormatColorResetIcon onClick={colorHandler} id="transperent"/></Fab></Zoom>
//         <Zoom in="true"><Fab onClick={colorHandler} id="red" class="themeColor red" ></Fab></Zoom>
//         <Zoom in="true"><Fab onClick={colorHandler} class="themeColor orange" id="orange"></Fab></Zoom>
//         <Zoom in="true"><Fab onClick={colorHandler} class="themeColor lightblue" id="lightblue"></Fab></Zoom>
//         <Zoom in="true"><Fab onClick={colorHandler} class="themeColor blue" id="blue"></Fab></Zoom>
//         <Zoom in="true"><Fab onClick={colorHandler} class="themeColor yellow" id="yellow"></Fab></Zoom>
//         <Zoom in="true"><Fab onClick={colorHandler} class="themeColor green" id="green"></Fab></Zoom>
//         <Zoom in="true"><Fab onClick={colorHandler} class="themeColor pink" id="pink"></Fab></Zoom>
//     </div>
//     );
// };  

// export default ThemePallet