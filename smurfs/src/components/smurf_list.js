import React from 'react'
import { connect } from 'react-redux';

function SmurfList(props) {

   console.log("IN SMURFLIST ", props.smurfArray);

      return (
         <div>
            {console.log("Props.SmurfArray in list: ",props.smurfArray)}
            { props.smurfArray.map( (smurf) => 
               <>
                  {console.log("smurf in list: ", smurf)}
                  <div key={smurf.id}>
                     <p>{smurf.name}</p>
                     <p>{smurf.age}</p>
                     <p>{smurf.height}</p> 
                  </div>   
               </>
            )
            }
         </div>
      )
}

const mapStateToProps = (state) => {
   return {
      smurfArray: state.smurfArray
   }
}

export default connect( mapStateToProps, {} )(SmurfList);