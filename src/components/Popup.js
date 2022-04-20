import React from 'react';
import '../componentStyles/Popup.css';
import Close from '../Images/close_black_24dp.svg'

function Popup(props) {
    return (props.trigger)?(
        <div className="popup" style={{textAlign: 'center'}}>
            <div className="popup-inner">
                <button className="closeBtn" onClick={() => props.setTrigger(false)}><img src={Close} alt="Close" style={{maxWidth: "50px"}}></img></button>
                {props.children}
            </div>
        </div>
    ): "";
}

export default Popup
