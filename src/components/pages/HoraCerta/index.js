import { useState, useEffect } from "react"; 
import DiaMesAno from "../DiaMesAno";


 function HoraCerta(){
    const [time, setTime] = useState();
    const [dia, setDia] = useState();
    
 
    function formatTime(rel){
        if(rel < 10){
            return'0'
        } else{
            return'';
        
}

 
     }

    

useEffect(() => {

    const timeID = setInterval(() => tick ())

    return function cleanup() {
        clearInterval(timeID)
    }
})


    function tick(){

 
        
      
        const d = new Date();

        d.setSeconds(d.getSeconds()+30);
        d.setHours(d.getHours()-1);
        const h = d.getHours();
        const m = d.getMinutes();
        const s = d.getSeconds() ;

       
      
        const dmes = d.getDate();
        const dano = d.getFullYear();

 
        
       

        setDia(formatTime (h) + h + ':' + formatTime(m) + m + ':' + formatTime(s) + s);

       
    }
    
        return(
            <div className="clock">
                <div className="screen">
                <h1 className = "time">{time}</h1>
                <h1 className = "dia">{dia}</h1>
            </div>
        </div>
        )

        
    }
    export default HoraCerta