import React from 'react'
import { connect } from 'react-redux';

function SmurfList(props) {

   console.log("IN SMURFLIST ", props.smurfArray);

   return (
      <div>
      <p>{props.smurfArray[0].name}</p>
      <p>{props.smurfArray[0].age}</p>
      <p>{props.smurfArray[0].height}</p> 
   </div>   
   )
}

const mapStateToProps = (state) => {
   return {
      smurfArray: state.smurfArray
   }
}

export default connect( mapStateToProps, {} )(SmurfList);