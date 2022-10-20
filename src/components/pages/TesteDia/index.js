import React, { useState } from 'react';
import { format } from 'date-fns';
import  enUS  from 'date-fns/locale/en-US';
import { addHours } from 'date-fns'

function TesteDia(){


    const [horaAtual, setDiaAtual] = useState(new Date());
 

return ( 

    <div className="DiaMesAno">
    

             
           
            <div><h1>{format(horaAtual, " iiii, dd MMMM yyyy  HH:mm:ss", {enUS} )}</h1></div>


            <div><h1>{addHours(horaAtual, -4).toUTCString  ()}</h1></div>
            <div><h1>{addHours(horaAtual, -4).toDateString ()}</h1></div>
        
     

    </div>
);

}
export default TesteDia;