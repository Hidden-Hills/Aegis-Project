import React, { useState } from 'react';
import './index.css';
import Stack from '@mui/material/Stack';
import CameraMaster from './Cameras';
import AegisMaster from './Aegis';
import DataMaster from './DataCenter';
import {Route,Routes, BrowserRouter as Router} from 'react-router-dom';
import AdminMaster from './AdminPanel';
import 'remixicon/fonts/remixicon.css'
import SettingsMaster from './Settings';
import {LightTheme, DarkTheme, themes} from './components/dark-light-mode-bth.js';
import {ThemeProvider} from "styled-components";


function App (){
  return(
  <div style={{paddingBottom: '10px'}}>
    <Stack direction="column" justifyContent="center" alignItems="flex-start">
    <div className="buttonParent">
    <p className="button" style={{}}><a href="/AdminPanel">Home</a></p>
    <p className="button" style={{}}><a href="/Cameras">Control Center</a></p>
    <p className="button" style={{}}><a href="/DataCenter">Data Center</a></p>
    <p className="button" style={{}}><a href="/Settings">Settings</a></p>
    </div>   
    </Stack>
        <Router>
          <Routes>
            <Route exact path="/" component={AdminMaster}/>
            <Route path="/AdminPanel" component={AdminMaster}/>
            <Route path="/Cameras" component={CameraMaster}/>
            <Route path="/DataCenter" component={DataMaster}/>
            <Route path="/Aegis" component={AegisMaster}/>
            <Route path="/Settings" component={SettingsMaster}/>
          </Routes>
        </Router>
  </div>
  )
}
export default App;

{/*<ThemeProvider theme={themes[theme]}>
     <Splash theme={theme} setTheme={setTheme}/>*/}{/*const [theme, setTheme] = useState("light")*/}