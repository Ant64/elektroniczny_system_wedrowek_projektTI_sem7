import React from 'react'
import {Link} from "react-router-dom"
import "./style/Navbar.css"

function Navbar() {
    return (
        <nav className="navbar bg-dark container">
            <h4><Link className="link" to="/">Home</Link></h4>
            <h4><Link className="link" to="/addTrip">Dodaj wycieczke</Link></h4>
            <h4><Link className="link" to="/tripList">Lista wycieczek</Link></h4>
        </nav>
    )
}

export default Navbar;