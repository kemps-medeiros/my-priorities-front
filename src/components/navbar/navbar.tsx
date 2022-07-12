import React from "react";
import "./style.css";


const Navbar: React.FC = () => {

    return (
        <div>
            <nav className="pink darken-4">
                <div className="container">
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo">MyPriorities</a>
                        {/* Quando for implementar o meu responsivo, utilizar: */}
                        {/* <a href="#" data-target="mobile-demo" className="sidenav-trigger">
                            <i className="material-icons">menu</i>
                        </a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="sass.html">Sass</a></li>
                            <li><a href="badges.html">Components</a></li>
                            <li><a href="collapsible.html">Javascript</a></li>
                            <li><a href="mobile.html">Mobile</a></li>
                        </ul> */}
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a target="_blank" rel="noreferrer" href="https://github.com/kemps-medeiros">Github</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://kemps-medeiros.github.io/kemps-portfolio/">Portfolio</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kempsmedeiros/">Linkedin</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;