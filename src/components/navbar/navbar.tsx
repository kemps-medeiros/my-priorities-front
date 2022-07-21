import React from "react";
import "./style.css";



const Navbar: React.FC = () => {

    return (
        <div>
            <nav className="pink darken-4">
                <div className="container">
                    <div className="nav-wrapper">
                        <a href="#!" className="brand-logo">MyPriorities</a>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger">
                            <i className="material-icons">menu</i>
                        </a>
                        <ul className="right hide-on-med-and-down">
                            <li><a target="_blank" rel="noreferrer" href="https://github.com/kemps-medeiros">My-Github</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://kemps-medeiros.github.io/kemps-portfolio/">My-Portfolio</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kempsmedeiros/">My-Linkedin</a></li>
                        </ul>
                    </div>
                </div>
            </nav >
            <ul className="sidenav" id="mobile-demo">
                <li><a target="_blank" rel="noreferrer" href="https://github.com/kemps-medeiros">My-Github</a></li>
                <li><a target="_blank" rel="noreferrer" href="https://kemps-medeiros.github.io/kemps-portfolio/">My-Portfolio</a></li>
                <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kempsmedeiros/">My-Linkedin</a></li>
            </ul>
        </div >
    )
}

export default Navbar;