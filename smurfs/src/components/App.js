import React, { useEffect, Component } from "react";
import "./App.css";
import { connect } from 'react-redux';
import axios from "axios";

import SmurfForm from './smurf_form';
import SmurfList from './smurf_list';
import { initializeSmurf } from '../actions/index'


function App ( props ) {

    // INITIALIZE THE DISPLAY FROM THE API
    useEffect(() => {
      console.log("USE EFFECT IS CALLED");
      props.initializeSmurf();
   }, [initializeSmurf]);

   // axios.get("http://localhost:3333/smurfs")
   // .then( (res) => {
   //    console.log(res);
   // })
   // .catch(err => console.log("ERROR:", err));

  
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <SmurfForm/>
        <SmurfList/>
      </div>
    );

}


export default connect( null, { initializeSmurf })(App);
