import React, { useEffect } from "react";
import "./App.css";
import { connect } from 'react-redux';
import styled from 'styled-components';

import SmurfForm from './AddForm';
import SmurfDisplay from './SmurfDisplay';
import { initializeSmurf } from '../actions/index'


function App ( props ) {

    // INITIALIZE THE DISPLAY FROM THE API
    useEffect(() => {
      //console.log("USE EFFECT IS CALLED");
      props.initializeSmurf();
   }, [initializeSmurf]);
 
    return (
      <AppContainer className="App">
        <h1>SMURFS! W/Redux</h1>
        <SmurfForm/>
        <SmurfDisplay/>
      </AppContainer>
    );

}


export default connect( null, { initializeSmurf })(App);

const AppContainer = styled.div`
   h1{
      color: #88CCFF;
   }
`;