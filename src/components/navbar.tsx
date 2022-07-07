import React from "react";
import "./style.css";


const Navbar: React.FC = () => {

    return (
        <div>
            <nav>
                <div className="container">
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo">MyPriorities</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="#">Github</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Linkedin</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;