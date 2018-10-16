import React from "react";
import "./Navbar.css"

const Navbar = (props) => {

    return (
        <nav>
            <div>
                <img src="images/international.png" alt="World Game" className="navbar-img" />
            </div>
            <div>
                <p>Flag Guessing Game!</p>
            </div>
        </nav>
    )

}

export default Navbar;