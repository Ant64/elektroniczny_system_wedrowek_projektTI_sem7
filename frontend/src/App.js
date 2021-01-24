import './App.css';
import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import Footer from "./components/Footer"
import AddTrip from "./components/AddTrip"
import TripList from "./components/TripList"
import ItemGallery from "./components/ItemGallery"

function App() {
  return(
    <div className="container-background">
    <Router>
    <Navbar />

        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/addTrip">
          < AddTrip/>
        </Route>

        <Route path="/tripList">
          <TripList/>
        </Route>

        <Route path="/itemGallery">
          <ItemGallery/>
        </Route>

    </Router>
    <Footer/>
    </div>
  
    //TODO
    //View item
  );
}

export default App;