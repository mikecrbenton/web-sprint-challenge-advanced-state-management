import React, { Component } from "react";
import "./App.css";
import { connect } from 'react-redux';

import SmurfForm from './smurf_form';
import SmurfList from './smurf_list';


function App ( props ) {
  
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <SmurfForm/>
        <SmurfList/>
      </div>
    );

}


export default App;
