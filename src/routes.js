import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./Home";
import Contador from "./Contador";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           <Route component = { Contador }  path="/Contador" />
     
    

       </BrowserRouter>
   )
}

export default Routes;