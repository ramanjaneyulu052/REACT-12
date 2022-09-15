 // index.js -> Root_Module for Entire Project
 import React from 'react'
 import ReactDOM from 'react-dom'

 // import Bootstrap into React
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//import import Routings
import Routings from './components/Routings' 


ReactDOM.render(<Routings/>, document.getElementById('root'))            

