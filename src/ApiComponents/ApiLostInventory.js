import React from 'react';
import axios from 'axios';
import Loader from '../Images/Loader.gif'
import Stack from '@mui/material/Stack';
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';


const dataInv = [
    {
      name: 'Mon',
      LI: "12"
    },
    {
      name: 'Tues',
      LI: "1"
    },
    {
      name: 'Wed',
      LI: "5"
    },
    {
      name: 'Thurs',
      LI: "2"
    },
    {
      name: 'Fri',
      LI: "7"
    },
    {
      name: 'Sat',
      LI: "0"
    },
    {
      name: 'Sun',
      LI: "1"
    },
];
class ApiFetchLostInventory extends React.Component{

    constructor(props){
      super(props)
      
      this.state = {
        lostinventory: []
      }
    } 
    

    componentDidMount(){
      var lostinventory = {
        method: 'GET',
        url: 'http://127.0.0.1:8000/lostinventory/',
        Allow: 'GET, POST, HEAD, OPTIONS',
        Vary: 'Accept',
        headers: {
            "Content-type": "application/json"
        }
      };
      axios.request(lostinventory)
      .then(response=>{
        this.setState({
            lostinventory: response.data
        })
        console.log(response.data)
      })
    }
    render(){
      if(!this.state.lostinventory[0]){
        return(
          <img src={Loader} alt="loadingCircle" style={{textAlign: 'center'}}></img>
        )
      }
      if(this.state.lostinventory[0]){
        return(
        <div id="crimeGraph">
          <Stack spacing={2} direction="row" justifyContent="center" alignItems="center">
        <div className="graphStyle">
        <Stack spacing={2} direction="row" justifyContent="center" alignItems="center">
        <LineChart width={600} height={200} data={dataInv} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="LI" stroke="#8884d8" name="Estimated Inventory Loss"/>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
        </Stack>
        </div>
          <p style={{textAlign: 'center', fontStyle: 'italic', fontSize: '18px'}}>{this.state.lostinventory[0].LIM}</p>
          <p style={{textAlign: 'center', fontStyle: 'italic', fontSize: '18px'}}>{this.state.lostinventory[0].LIT}</p>
          <p style={{textAlign: 'center', fontStyle: 'italic', fontSize: '18px'}}>{this.state.lostinventory[0].LIW}</p>
          <p style={{textAlign: 'center', fontStyle: 'italic', fontSize: '18px'}}>{this.state.lostinventory[0].LITH}</p>
          <p style={{textAlign: 'center', fontStyle: 'italic', fontSize: '18px'}}>{this.state.lostinventory[0].LIF}</p>
          <p style={{textAlign: 'center', fontStyle: 'italic', fontSize: '18px'}}>{this.state.lostinventory[0].LISA}</p>
          <p style={{textAlign: 'center', fontStyle: 'italic', fontSize: '18px'}}>{this.state.lostinventory[0].LISU}</p>
          </Stack>
        </div>
        )
    }
}
}

export default ApiFetchLostInventory;