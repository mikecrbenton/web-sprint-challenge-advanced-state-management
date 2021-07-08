import { 
   INITIALIZE_SMURF,
   GET_SMURF,
   POST_SMURF } from "../actions"


let initialState = {

   smurfArray : [ 
      {
       name : "",
       age : null,
       height : "",
       id : null 
      }
   ]
 };

export const smurfReducer = ( state = initialState, action ) => {

   switch(action.type) {

      case INITIALIZE_SMURF:
            //console.log("INITIALIZE SMURF IS CALLED")
            //console.log("state.smurfArray is ", state.smurfArray)
            //console.log("action.payload is: ", action.payload[0])
        return { 
           ...state, 
           smurfArray: [
              { name: action.payload[0].name,
                age: action.payload[0].age,
                height : action.payload[0].height,
                id : action.payload[0].id}
           ] 
         }; 

      case GET_SMURF:
            //console.log("GET SMURF IS CALLED")
            //console.log("state.smurfArray is ", state.smurfArray)
            //console.log("action.payload is: ", action.payload)
        return { 
           ...state,  
           smurfArray: [ ...action.payload] }; 
      
      case POST_SMURF:
         //console.log("POST SMURF IS CALLED")
         return { 
            ...state,
            smurfArray:  [...state.smurfArray] 
         }; 
      
      default:
         return state;
   }
}