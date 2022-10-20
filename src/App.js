import {Link} from 'react-router-dom'
import './App.css';
import DiaMesAno from './components/pages/DiaMesAno';
import Contador from './components/pages/Contador';
import Sub from './components/pages/Sub';
import Home from './components/pages/Home';
import HoraCerta from './components/pages/HoraCerta';
import TesteDia from './components/pages/TesteDia';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Container from './components/layout/Container';




function App() {


  return(
<Router>
       <div>
           <Link to="/">Home</Link>
           <Link to="/HoraCerta">HoraCerta</Link>
           <Link to="/DiaMesAno">Dia Mes Ano</Link>
           <Link to="/TesteDia">Teste Dia</Link>
           <Link to="/Contador">Contador</Link>
           <Link to="/Sub">Subtração</Link>
           
           
       </div>
       
       <Container>
         <Routes> 
           <Route exact path="/" element= {<Home/>}/>
           <Route exact path="/HoraCerta" element= {<HoraCerta/>}/>
           <Route exact path="/DiaMesAno" element= {<DiaMesAno/>}/>
           <Route exact path="/contador" element= {<Contador/>}/>
           <Route exact path="/TesteDia" element= {<TesteDia/>}/>
           <Route exact path="/sub" element= {<Sub/>}/>
           
          
           
         </Routes>
         <DiaMesAno/>
        </Container>

</Router>



  )
  }

export default App;
