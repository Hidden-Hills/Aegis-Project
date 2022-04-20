import React from 'react';
import axios from 'axios';
import Loader from '../Images/Loader.gif'

class ApiFetchHeroes extends React.Component{

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
            <img src={Loader} alt="loadingCircle" style={{textAlign: 'center', maxWidth: '50px'}}></img>
        )
      }
      if(this.state.heroes[0]){
        
        return(
            <div style={{textAlign: 'center'}}>
                <p style={{textAlign: 'center', fontSize: '22px'}}>Welcome, {this.state.heroes[0].firstName}</p>
            </div>
        )
    }
    
  }
}
export default ApiFetchHeroes;