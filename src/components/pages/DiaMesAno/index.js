import React, { useState } from 'react';
import { format } from 'date-fns';
import enUS from 'date-fns/locale/en-US';

function DiaMesAno(){


    const [horaAtual] = useState(new Date());
    

return ( 
    <div className="DiaMesAno">
    


           
            <div><h1>{format(horaAtual, "iiii, dd  MMMM  yyyy",  )}</h1></div>
        
     

    
    </div>
);

}
export default DiaMesAno;