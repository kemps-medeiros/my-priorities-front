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
                            <li><a target="_blank" href="https://github.com/kemps-medeiros">Github</a></li>
                            <li><a target="_blank" href="https://kemps-medeiros.github.io/kemps-portfolio/">Portfolio</a></li>
                            <li><a target="_blank" href="https://www.linkedin.com/in/kempsmedeiros/">Linkedin</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;