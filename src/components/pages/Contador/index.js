import {Link} from 'react-router-dom'
import React, {useState} from 'react';
import styles from './Contador.module.css'

function Contador(){
    
   const [cliqueagora, setCliqueagora] = useState (0);

    function nClick(){

      return(
        setCliqueagora (cliqueagora +1)
      )  
    }
    return(

       
        
       <div> 
        <div><h1>Contador</h1></div> 
        <div><h1>{cliqueagora}</h1></div>

         <button onClick = {()=> nClick ()}> Clique Aqui Para Adicionar +1 </button>
           
            
      
       </div>
  
    )
}

export default Contador;