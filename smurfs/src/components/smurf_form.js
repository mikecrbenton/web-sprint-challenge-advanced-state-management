import React, { useState } from "react";
import { connect } from 'react-redux';
import { getSmurf, postSmurf } from '../actions'
import styled from 'styled-components';

function SmurfForm(props) {

  // LOCAL STATE FOR FORM 
  const [newSmurf, setNewSmurf] = useState(
     {
        name: "",
        age: "",
        height: ""
     }
  )
  // CHANGE------------
  const changeHandler = e => {
     e.persist();

     setNewSmurf( {
       ...newSmurf,
       [e.target.name] : e.target.value
     });
  };

  // SUBMIT------------
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
      <SmurfFormStyling onSubmit={submitHandler}>

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
        
      </SmurfFormStyling>
     
       </>
    );
}

const mapStateToProps = (state) => {
   return{
     // EMPTY- 
   }
}

export default connect(mapStateToProps, { postSmurf, getSmurf })(SmurfForm);

const SmurfFormStyling = styled.form`
   display: flex;
   flex-direction: column;
   width: 40%;
   margin: 0 auto;
   padding: .5em;
   border: 10px solid #88CCFF;
   border-radius: 10px;

   label{
      margin-bottom: .5em ;
      display:flex;
      flex-direction: column;
      align-items: flex-start;
      font-weight: 700;
   }
   input{
      width: 75%;
      padding: .6em .3em;
      margin: .3em 0;
      border: 2px solid gray;
      border-radius: 5px;
   }
   button{
      width: 25%;
      margin: 1em auto;
      padding: .3em;
      border: 2px solid gray;
      border-radius: 5px;
   }
   select{
      width: 78%;
      padding: .6em .3em;
      margin: .3em 0;
      border: 2px solid gray;
      border-radius: 5px;
      font-weight: 700;  
   }
   textarea{
      border: 2px solid gray;
      border-radius: 5px;
      width: 96%;
      height: 40px;
      margin: .3em 0;
      padding: .6em .3em;
      font-weight: 900;
      font-size: 1.2rem;
   }

`;