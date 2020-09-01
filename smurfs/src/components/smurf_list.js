import React from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components'

function SmurfList(props) {

   //console.log("IN SMURFLIST ", props.smurfArray);

      return (
         <SmurfListStyling>
            { props.smurfArray.map( (smurf) => 
                  <SmurfCard key={smurf.id}>
                     <p>{smurf.name}</p>
                     <p>{smurf.age}</p>
                     <p>{smurf.height}</p> 
                  </SmurfCard>   
            )}
         </SmurfListStyling>
      )
}

const mapStateToProps = (state) => {
   return {
      smurfArray: state.smurfArray
   }
}

export default connect( mapStateToProps, {} )(SmurfList);

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