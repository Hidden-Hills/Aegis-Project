import React from 'react';
import ApiFetchNotifications from './ApiComponents/ApiNotifications';
import ApiFetchHeroes from './ApiComponents/ApiHeroes';
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import Stack from '@mui/material/Stack';
import './AppStyle.css'

const dataCrime= [
    {
      name: 'Mon',
      uv: 5,
    },
    {
      name: 'Tues',
      uv: 0,
    },
    {
      name: 'Wed',
      uv: 4,
    },
    {
      name: 'Thurs',
      uv: 12,
    },
    {
      name: 'Fri',
      uv: 33,
    },
    {
      name: 'Sat',
      uv: 2,
    },
    {
      name: 'Sun',
      uv: 0,
    },
];


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




function AdminMaster(){
    return( 
        <div style={{textAlign: 'center'}}>
          <ApiFetchHeroes/>
          <p style={{textAlign: 'center', fontSize: '28px'}}>Recent Inventory &amp; Crime Data Graphs</p>
            <GraphNotified/>      
        </div>
    )
}

function GraphNotified(){
    return(
        <div className="graphStyle">
        <Stack spacing={2} direction="row" justifyContent="center" alignItems="center">

        <LineChart width={600} height={200} data={dataInv} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="LI" stroke="#8884d8" name="Estimated Inventory Loss"/>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
        <LineChart width={600} height={200} data={dataCrime} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" name="Estimated Crimes Detected"/>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
        </Stack>
        <Stack spacing={2} direction="column" justifyContent="center" alignItems="center">
        <p style={{fontSize:'28px'}}>Notifications</p>
        <div id="autoScroll" className="buttonParent" style={{textAlign: 'center', width: '1020px', height: '250px', overflowX: 'auto', whiteSpace: 'nowrap', textOverflow: 'ellipsis', scrollBehavior: 'smooth', color: 'black'}}>
          <ApiFetchNotifications/>
        </div>
        </Stack>
        </div>
    )
}
export default AdminMaster;