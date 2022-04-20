import React from 'react';
import Stack from '@mui/material/Stack';
import './Cameras.css';
import 'reactjs-popup/dist/index.css';
import RightArrow from './Images/right.png'
import LeftArrow from './Images/left.png'
import ApiFetchCameras from './ApiComponents/ApiCameras';

function CameraMaster(){
    return(
        <div style={{textAlign: 'center'}}>
            <p style={{margin: '10px'}}>Enter Camera IP Address</p>
            <input type="text" style={{textAlign: 'center'}} id="enterIP"></input>
            <p style={{margin: '10px'}}>Title this Camera</p>
            <input type="text" style={{textAlign: 'center'}} id="enterIP"></input>
            <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
            <button style={{margin: '10px'}} className="buttonParent" onClick={AddCamera}>Add Camera</button>
            </Stack>
            <ControlCenter/>
        </div>
    )
}
function ControlCenter(){
    return(
        <div style={{textAlign: 'center', padding: '75px'}}>
            <ApiFetchCameras/>
            <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
            <img src={LeftArrow} alt="Left Arrow" onClick={LeftBtn}></img>
            <p className="cameraScreen" id="cameraIndex">Placeholder Camera Screen</p>
            <img src={RightArrow} alt="Right Arrow" onClick={RightBtn}></img>
            </Stack>
        </div>
    )
}
function AddCamera(){
    console.log("Adding Camera");
}
function RightBtn(){
    console.log("Right Arrow Clicked")
    document.getElementById("cameraScreen")
}
function LeftBtn(){
    console.log("Left Arrow Clicked")
}

export default CameraMaster;