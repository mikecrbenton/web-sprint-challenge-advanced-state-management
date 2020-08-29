import React, { useState } from "react";
import { connect } from 'react-redux';
import { getSmurf, postSmurf } from '../actions'
import styled from 'styled-components';

function SmurfForm(props) {

  const [newSmurf, setNewSmurf] = useState(
     {
        name: "",
        age: "",
        height: ""
     }
  )
 
  const changeHandler = e => {
     e.persist();

     setNewSmurf( {
       ...newSmurf,
       [e.target.name] : e.target.value
     });
  };

  
  const submitHandler = e => {
    e.preventDefault();

    props.postSmurf(newSmurf)
  
    //clear form
    setNewSmurf({
      name: "",
      age: "",
      height: ""
   });
  };
   
    return (
       <>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">
           Name
            <input
               type="text"
               name="name"
               onChange={changeHandler} // setState
               value={newSmurf.name} //controlled input - view State
            />
        </label>
        <label htmlFor="age">
           Age 
            <input
               type="text"
               name="age"
               onChange={changeHandler} // setState
               value={newSmurf.age} //controlled input - view State
            />
        </label>
        <label htmlFor="height">
           Height
            <input
               type="text"
               name="height"
               onChange={changeHandler} // setState
               value={newSmurf.height} //controlled input-view State
            />
        </label>
        <button type="submit">Add</button>
        <button type="button" onClick={props.getSmurf}>Get Smurfs</button>
      </form>
     
       </>
    );
}

const mapStateToProps = (state) => {
   return{
     
   }
}

export default connect(mapStateToProps, { postSmurf, getSmurf })(SmurfForm);