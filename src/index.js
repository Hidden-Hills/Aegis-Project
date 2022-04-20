import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './App';
import 'remixicon/fonts/remixicon.css'


function Main(){
  return(
    <div>
        <App/>
    </div>
  )
}

export default App;
ReactDom.render(<Main/>,document.getElementById('root'))