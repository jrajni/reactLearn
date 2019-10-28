import React, { Component } from 'react'

 const B=(props)=>{

       const{sendInc,sendDec,sendCounter}=props;
        return (
            
            <div>
           <h2>{sendCounter}</h2>
           <button onClick={sendInc}>increment</button> 
           <button onClick={sendDec}>decrement</button>     

            </div>
        )
    
}

export default B
