import React from 'react';
import { BrowserRouter,Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/landingPage";
import Header from './GlobalComp/NavbarStatic';
import NavbarDynamic from './GlobalComp/NavbarDynamic';
import Theater from './Pages/TheaterPage/theater';
import FooterComp from './GlobalComp/Footer';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <NavbarDynamic/>
        <Route path='/' component={LandingPage} exact/>
        <Route path='/theater' component={Theater}/>
        <FooterComp/>
      </div>
    </BrowserRouter>

  );
}

export default App;
