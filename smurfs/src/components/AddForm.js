import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { getSmurf, postSmurf } from '../actions'
import styled from 'styled-components';
import * as yup from 'yup'

const formSchema = yup.object().shape( {
   name: yup.string()
      .required("Error: Name is Required"),
   age: yup.string()  
      .required("Error: Age is Required"),
   height: yup.string()
      .required('Error: Height is Required') 
} ) 

function SmurfForm(props) {

  // LOCAL STATE FOR FORM 
  const [newSmurf, setNewSmurf] = useState(
      {
         name: "",
         age: "",
         height: ""
      }
  )
  // ERROR STATE - YUP  
  const [errorState, setErrorState] = useState(
      {
         name: "",
         age: "",
         height: ""
      }
  )
  // BUTTON STATE - YUP
  const [buttonState, setButtonState] = useState(true);


  // FUNCTIONS=======================================

  useEffect( () => {
      formSchema.isValid(newSmurf)
         .then( isValid => {
            setButtonState(!isValid); // don't hardcode - base on value returned
      });
   }, [newSmurf]);

  // VALIDATE----------
  const validate = (e) => {
   
   yup.reach( formSchema, e.target.name )
      .validate(e.target.value)
         .then( (validation) => {
            setErrorState({
               ...errorState,
               [e.target.name]: "" //set as empty string - clear when valid
            })
         })
         .catch( (error) => {
            setErrorState({
               ...errorState,
               [e.target.name]: error.errors[0]
            })
         })
}

  // CHANGE------------
  const changeHandler = e => {
     e.persist();
     // YUP
     validate(e); 

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

// YUP INLINE STYLES
let yupStyling = { color: 'red', fontSize: '.8rem', margin: 0 }
   
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
            { ( errorState.name.length > 0 ) 
               ? <p style={yupStyling}> {errorState.name} </p> 
               : null }
        </label>

        <label htmlFor="age">
           Age 
            <input
               type="text"
               name="age"
               onChange={changeHandler} // setState
               value={newSmurf.age} //controlled input - view State
            />
            { ( errorState.age.length > 0 ) 
               ? <p style={yupStyling}> {errorState.age} </p> 
               : null }
        </label>

        <label htmlFor="height">
           Height
            <input
               type="text"
               name="height"
               onChange={changeHandler} // setState
               value={newSmurf.height} //controlled input-view State
            />
            { ( errorState.height.length > 0 ) 
               ? <p style={yupStyling}> {errorState.height} </p> 
               : null }

        </label>

        <button type="submit" disabled={buttonState}>Add</button>
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
   padding: 1em;
   border: 10px solid #88CCFF;
   border-radius: 10px;
   box-shadow: 0px 0px 5px black;

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