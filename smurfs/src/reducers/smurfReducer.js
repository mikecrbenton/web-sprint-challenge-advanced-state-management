let initialState = {}

export const smurfReducer = ( state=initialState, action ) => {

   switch(action.type) {

      case "GET_SMURF":
         return state;
      
      case "POST_SMURF":
         return state;
      
      default:
         return state;
   }
}