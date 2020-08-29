import axios from 'axios';

export const initializeSmurf = () => {
   return dispatch => {
      console.log("IN DISPATCH FOR INITIALIZE SMURF")
       
       axios.get("http://localhost:3333/smurfs")
         .then( (response) => {
            console.log("SMURFS IN action ",response);
            dispatch({ type: "INITIALIZE_SMURF", payload: response.data });
         })
         .catch(err => console.log("ERROR:", err));
     };
}

export const getSmurf = () => {
   return dispatch => {
      console.log("IN DISPACTH FOR GETSMURF")
       
       axios.get("http://localhost:3333/smurfs")
         .then( (res) => {
            console.log("SMURFS IN action ",res);
            dispatch({ type: "GET_SMURF", payload: res.data });
         })
         .catch(err => console.log("ERROR:", err));
     };
}

export const postSmurf = (newSmurf) => {
   return dispatch => {

      axios.post( "http://localhost:3333/smurfs", newSmurf )
      .then( (response) => {
         console.log("RESPONSE FROM API: ",response.data)
         dispatch({ type: "POST_SMURF", payload: response.data })
         dispatch({ type: "GET_SMURF", payload: response.data });
       } )
   } 
}