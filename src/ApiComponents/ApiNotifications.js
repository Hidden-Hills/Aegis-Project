import React from 'react';
import axios from 'axios';
import Loader from '../Images/Loader.gif'

class ApiFetchNotifications extends React.Component{

    constructor(props){
      super(props)
      
      this.state = {
        notifications: []
      }
    } 
    
    componentDidMount(){
      var notifications = {
        method: 'GET',
        url: 'http://127.0.0.1:8000/notifications/',
        Allow: 'GET, POST, HEAD, OPTIONS',
        Vary: 'Accept',
        headers: {
            "Content-type": "application/json"
        }
      };
      axios.request(notifications)
      .then(response=>{
        this.setState({
            notifications: response.data
        })
        console.log(response.data)
      })
    }
    render(){
      if(!this.state.notifications[0]){
        return(
          <img src={Loader} alt="loadingCircle" style={{textAlign: 'center', maxWidth: '200px'}}></img>
        )
      }
      if(this.state.notifications[0]){
        return(
        <div>    
          <p style={{textAlign: 'center', fontSize: '18px', color: '#886dab'}}>{this.state.notifications[0].notification}</p>
          <p style={{textAlign: 'center', fontSize: '18px', color: '#886dab'}}>{this.state.notifications[1].notification}</p>
          <p style={{textAlign: 'center', fontSize: '18px', color: '#886dab'}}>{this.state.notifications[2].notification}</p>
          <p style={{textAlign: 'center', fontSize: '18px', color: '#886dab'}}>{this.state.notifications[3].notification}</p>
          <p style={{textAlign: 'center', fontSize: '18px', color: '#886dab'}}>{this.state.notifications[4].notification}</p>
        </div>
        )
    }
}
}
export default ApiFetchNotifications;