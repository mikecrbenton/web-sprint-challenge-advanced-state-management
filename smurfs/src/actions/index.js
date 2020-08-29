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

}

export const postSmurf = () => {

}