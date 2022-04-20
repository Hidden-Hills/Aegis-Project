import React from 'react';
import axios from 'axios';
import Loader from '../Images/Loader.gif'

class ApiFetchCameras extends React.Component{

    constructor(props){
      super(props)
      
      this.state = {
        cameras: []
      }
    } 
    
    componentDidMount(){
      var cameras = {
        method: 'GET',
        url: 'http://127.0.0.1:8000/cameraaddress/',
        Allow: 'GET, POST, HEAD, OPTIONS',
        Vary: 'Accept',
        headers: {
            "Content-type": "application/json"
        }
      };
      axios.request(cameras)
      .then(response=>{
        this.setState({
            cameras: response.data
        })
        console.log(response.data)
      })
    }
    render(){
      if(!this.state.cameras[0]){
        return(
          <img src={Loader} alt="loadingCircle" style={{textAlign: 'center', maxWidth: '50px'}}></img>
        )
      }
      if(this.state.cameras[0]){
        return(
        <div>    
          <p style={{textAlign: 'center', fontSize: '18px'}}>{this.state.cameras[0].cameraName}</p>
        </div>
        )
    }
}
}
export default ApiFetchCameras;