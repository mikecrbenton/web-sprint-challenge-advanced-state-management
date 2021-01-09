import React from 'react'
import styled from 'styled-components'

function Smurf(props) {

   console.log("IN SMURF ", props);

      return (
         <SmurfCard key={props.id} >  
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Height: {props.height}</p> 
         </SmurfCard>       
      )
}

export default Smurf;

const SmurfCard = styled.div`
   border: 5px solid #88CCFF;
   border-radius: 5px;
   box-shadow: 0px 0px 5px gray;
   width: 20%;
   margin: 2em auto 0;
   padding: 1em;
   text-align: left;
`;