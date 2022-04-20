import React from 'react';
import axios from 'axios';
import Loader from '../Images/Loader.gif'


class ApiFetchMessages extends React.Component{

    constructor(props){
      super(props)
      
      this.state = {
        message: []
      }
    } 
    
    componentDidMount(){
      var message = {
        method: 'GET',
        url: 'http://127.0.0.1:8000/messages/',
        Allow: 'GET, POST, HEAD, OPTIONS',
        Vary: 'Accept',
        headers: {
            "Content-type": "application/json"
        }
      };
      axios.request(message)
      .then(response=>{
        this.setState({
            message: response.data
        })
      })
    }
    render(){
      setInterval(ApiFetchMessages, 1000);
      if(!this.state.message[0]){
        return(
          <img src={Loader} alt="loadingCircle" style={{textAlign: 'center', maxWidth: '50px'}}></img>
        )
      }
      if(this.state.message[0]){
        return(
        <div>    
          <p style={{textAlign: 'center', fontSize: '18px'}}><i style={{color: '#886dab'}}>@Admin3</i> said... {this.state.message[0].message}</p>
          <p style={{textAlign: 'center', fontSize: '18px'}}><i style={{color: '#886dab'}}>@Donovan</i> said... {this.state.message[1].message}</p>
          <p style={{textAlign: 'center', fontSize: '18px'}}><i style={{color: '#886dab'}}>@Donovan</i> said... {this.state.message[2].message}</p>
        </div>
        )
    }
}
}
export default ApiFetchMessages;