import React from 'react';
import Stack from '@mui/material/Stack';
import './DataCenter.css'
import ApiFetchMessages from './ApiComponents/ApiMessages';


function DataMaster(){
    return(
        <div>
            <MainDatas/>
            <p>​</p> {/*Invisible "p" elements are whitespace characters to fill in space.*/}
            <p>​</p>
            <SubsetDatas/>
        </div>
    )
}
function MainDatas(){
    return(
    <Stack direction="row" justifyContent="center" alignItems="center" spacing={5}>
    <div className="buttonParent">
    <p className="button" style={{fontSize: '22px'}}>Missing Products</p>
    <p>productOne: 1</p>
    <p>productTwo: 5</p>
    <p>productThree: 2</p>
    </div>
    <div className="buttonParent">
    <p className="button" style={{fontSize: '22px'}}>Avg Person Count</p>
    <p>countOne: 12</p>
    <p>countTwo: 34</p>
    <p>countThree: 122</p>
    </div>      
    <div className="buttonParent">
    <p className="button" style={{fontSize: '22px'}}>Faces Recognized</p>
    <p>Donovan Rivers</p>
    <p>Bill Gates</p>
    <p>Elon Musk</p>
    </div>
    </Stack>
    )
}
function SubsetDatas(){
    return(
        <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
            <p style={{textAlign: 'center', fontSize: '28px'}}>Messages</p>
            <div className="buttonParent">
                <ApiFetchMessages/>
            </div>
        </Stack>
    )
}
export default DataMaster;