import {Link} from 'react-router-dom'
import React, {useState} from 'react';
import styles from './Sub.module.css'

function Sub(){
    
   const [cliqueagora, setCliqueagora] = useState (10);

    function nClick(){

      return(
        setCliqueagora (cliqueagora -1)
      )  
    }
    return(

       
        
       <div>  
        <div><h1>Subtração</h1></div> 
        <div><h1>{cliqueagora}</h1></div>

         <button onClick = {()=> nClick ()}> Clique Aqui Para Subtrair </button>
           
              
      
       </div>
  
    )
}

export default Sub;