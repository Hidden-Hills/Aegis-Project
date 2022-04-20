import Stack from '@mui/material/Stack';
import React from 'react';
import 'remixicon/fonts/remixicon.css'
import './Settings.css'
import './Settings.scss'
import cube from './Images/Cube.png';
import axios from 'axios';
import Loader from './Images/Loader.gif'



function SettingsMaster(){
    return(
      <div>
        <SettingsLand/>
      </div>
  )
}
function SettingsLand(){

    return(
        <div>
            <Stack spacing={2} direction="column" justifyContent="center" alignItems="center">
                <ApiFetch/>
            </Stack>
        </div>
    )
}

class ApiFetch extends React.Component{

    constructor(props){
      super(props)
      
      this.state = {
        heroes: []
      }
    } 
    
    componentDidMount(){
      var heroes = {
        method: 'GET',
        url: 'http://127.0.0.1:8000/heroes/',
        Allow: 'GET, POST, HEAD, OPTIONS',
        Vary: 'Accept',
        headers: {
            "Content-type": "application/json"
        }
      };
      axios.request(heroes)
      .then(response=>{
        this.setState({
            heroes: response.data
        })
        console.log(response.data)
      })
    }
    render(){
      if(!this.state.heroes[0]){
        return(
          <img src={Loader} alt="loadingCircle"></img>
        )
      }
      if(this.state.heroes[0]){
        var loadFile = function (event) {
            var image = document.getElementById("output");
            image.src = URL.createObjectURL(event.target.files[0]);
        };
        return(
         <div>
            <div id="autoScroll" className="buttonParent" style={{textAlign: 'center', width: '1020px', height: '650px', whiteSpace: 'nowrap', textOverflow: 'ellipsis', scrollBehavior: 'smooth', color: 'black'}}>
                <div class="profile-pic">
                <label class="-label" for="file">
                <span class="glyphicon glyphicon-camera"></span>
                <span>Change Image</span>
                </label>
                <input id="file" type="file" onchange="loadFile(event)" onChange={loadFile}/>
                <img src={cube} id="output" width="200" alt="defaultPic"/>
                </div><p style={{textAlign: 'center', fontSize: '22px'}}>{this.state.heroes[0].fullName}</p>
                <p style={{textAlign: 'center', fontSize: '22px', color: '#886dab'}}>@{this.state.heroes[0].username}</p>
                <p style={{textAlign: 'center', fontSize: '22px'}}>{this.state.heroes[0].companyName}</p>
                <p>Email Notifications</p>                
                <a href="https://www.example.com"><p style={{fontSize: '22px'}}>Upgrade Aegis</p></a> 
                <a href="/AegisDocs/Aegis.pdf" download><p style={{color: '#886dab', fontStyle: 'italic'}}>Aegis Recognition Documentation (PDF)</p></a>
                </div>
         </div>
        )
    }
    
  }
}

export default SettingsMaster;