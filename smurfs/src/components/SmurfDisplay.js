import React from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components'

import Smurf from './Smurf'

function SmurfDisplay(props) {

   //console.log("IN SMURFDISPLAY ", props.smurfArray);

      return (
         <SmurfListStyling>
            { props.smurfArray.map( (smurf) => 
                  <Smurf key={smurf.id}
                     id={smurf.id}
                     name={smurf.name}
                     age={smurf.age}
                     height={smurf.height}
                  />
            )}
         </SmurfListStyling>
      )
}

const mapStateToProps = (state) => {
   return {
      smurfArray: state.smurfArray
   }
}

export default connect( mapStateToProps, {} )(SmurfDisplay);

const SmurfListStyling = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-evenly;
`;

const SmurfCard = styled.div`
   border: 5px solid #88CCFF;
   border-radius: 5px;
   width: 20%;
   margin: 2em auto;
   padding: 1em;
   text-align: left;
`;