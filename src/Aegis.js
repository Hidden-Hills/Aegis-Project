import React from 'react';
import Stack from '@mui/material/Stack';
import './Aegis.css'

function AegisMaster(){
    return(
        <div className="parent">
            <Stack spacing={2} direction="row" justifyContent="center" alignItems="center">
            <div className="card">
            <div className="container">
            <div className="paraParent">
            <a href="https://www.example.com">
            <h4><b>Basic</b></h4> 
            <p><i>$399/Yr</i></p>
            <p>Supports 3 Cameras</p>
            <p>30 FPS Cap</p>
            <p>Live In-App Security Alerts</p>
            <p>Up to 4 Administrators</p>
            <p>​</p>
            <p>​</p>
            <p>​</p>
            <p>​</p>
            </a>
            </div>
            </div>
            </div>
           <div class="card2">
            <div class="container">
            <a href="https://www.example.com">
            <h4><b>Upgrade</b></h4> 
            <p><i>$499/Yr</i></p>
            <p>Supports 5 Cameras</p>
            <p>60 FPS Cap</p>
            <p>Live In-App & Email Security Alerts</p>
            <p>Up to 8 Administrators</p>
            <p>​</p>
            <p>​</p>
            <p>​</p>
            <p>​</p>
            </a>
            </div>
            </div>
           <div class="card3">
            <div class="container">
            <a href="https://www.example.com">
            <h4><b>Pro</b></h4> 
            <p><i>$699/Yr</i></p>
            <p>Supports 8 Cameras</p>
            <p>60 FPS</p>
            <p>In-App Face Recognition</p>
            <p>Live Email & SMS Security Alerts</p>
            <p>Live Person Counting</p>
            <p>Live Missing Inventory Detector</p>
            <p>Up to 12 Administrators</p>
            </a>
            </div>
            </div>
           <div class="card4">
            <div class="container">
            <a href="https://www.example.com">
            <h4><b>Enterprise</b></h4> 
            <p><i>$999/Yr</i></p>
            <p>Supports 15 Cameras</p>
            <p>All Previous Features</p>
            <p> Unthreaded FPS</p>
            <p>Live Face Recognition</p>
            <p>Access to iOS & Android App</p>
            <p>Pegasi After Hours</p>
            <p>Unthreaded FPS</p>
            <p>Up to 20 Administrators</p>
            </a>
            </div>
            </div>
           </Stack>
           <Stack spacing={2} direction="column" justifyContent="center" alignItems="center">
            </Stack>
        </div>
    )
}
export default AegisMaster;