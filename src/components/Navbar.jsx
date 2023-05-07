import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [mainSelector, setMainSelector] = useState(null);
  const [linkTextSelector, setLinkTextSelector] = useState(null);
  const [navbarSelector, setNavbarSelector] = useState(null);
  const [active, setActive] = useState(0);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let pathname = window.location.pathname;
    let actives = document.querySelectorAll(".active");
    if(actives){
      actives.forEach((item) => { 
        item.classList.remove("active");
      });
    }

    let exact_path = document.querySelector("#exact-path");

    if(exact_path && counter === 0){
      exact_path.classList.add("active");
    }

    switch(pathname) {
      case "/":
        setActive(0);
        break;
      case "/prediction":
        setActive(1);
        break;
      case "/iir":
        setActive(2);
        break;
      case "/a_propos":
        setActive(3);
        break;
      case "/#contact":
        setActive(4);
        break;
      default:
        setActive(0);
        break;
    }

    

    setMainSelector(document.querySelector("#container"));
    setLinkTextSelector(document.querySelectorAll(".link-text"));
    setNavbarSelector(document.querySelector("#navbar"));
  }, []);


  const handleMouseEnter = () => {
    linkTextSelector.forEach((item) => {
      item.classList.remove("display-none");
      item.classList.add("display-inline");
    });
      navbarSelector.classList.remove("normal-width");
      navbarSelector.classList.add("max-width-hover");
    mainSelector.classList.add("blur");
  }

  const handleMouseLeave = () => {
    linkTextSelector.forEach((item) => {
      item.classList.remove("display-inline");
      item.classList.add("display-none");
    });
      navbarSelector.classList.remove("max-width-hover");
      navbarSelector.classList.add("normal-width");
    mainSelector.classList.remove("blur");
  }

  const handleLinkClick = () => {

    let actives = document.querySelectorAll(".active");
    if(actives){
      actives.forEach((item) => { 
        item.classList.remove("active");
      });
    }

      setCounter(counter + 1);
      linkTextSelector.forEach((item) => {
        item.classList.remove("display-inline");
        item.classList.add("display-none");
      });
      navbarSelector.classList.remove("max-width-hover");
      navbarSelector.classList.add("normal-width");
      mainSelector.classList.remove("blur");
  }

  return (
    <div className="navbar normal-width" id="navbar" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <ul className="navbar-nav">
        <li id="exact-path" className={active === 0 ? "nav-item navbar-logo active" : "nav-item navbar-logo"}>
            <NavLink className={"nav-link nav-link-logo"} to="/" onClick={handleLinkClick}>
                <span className="link-text logo-text display-none">ONYRIX</span>
                <img src="/assets/logo/logo-partial.svg" alt="logo" />
            </NavLink>
        </li>
        <li className={active === 1 ? "nav-item active" : "nav-item"}>
          <NavLink className={"nav-link"} to="/prediction" onClick={handleLinkClick}>
            <img src="/assets/icons/predict-white.svg" className="nav-img" alt="icon" />
            <span className="link-text display-none">Predire</span>
          </NavLink>
        </li>
        <li className={active === 2 ? "nav-item active" : "nav-item"}>
          <NavLink className={"nav-link"} to="/iir" onClick={handleLinkClick}>
            <img src="/assets/icons/iir-white.svg" className="nav-img" alt="icon" />
            <span className="link-text display-none">Institut Iternational des Rêves</span>
          </NavLink>
        </li>
        <li className={active === 3 ? "nav-item active" : "nav-item"}>
          <NavLink className={"nav-link"} to="/a_propos" onClick={handleLinkClick}>
            <img src="/assets/icons/about-white.svg" className="nav-img" alt="icon" />
            <span className="link-text display-none">A propos</span>
          </NavLink>
        </li>
        <li className={active === 4 ? "nav-item active" : "nav-item"}>
          <NavLink className={"nav-link"} to="/#contact" onClick={handleLinkClick}>
            <img src="/assets/icons/contact-white.svg" className="nav-img" alt="icon" />
            <span className="link-text display-none">Contact</span>
          </NavLink>
        </li>
        <li className={active === 5 ? "nav-item active" : "nav-item"}>
          <NavLink className="nav-link" to="/login" onClick={handleLinkClick}>
            <img src="/assets/icons/login.svg" className="nav-img" alt="icon" />
            <span className="link-text display-none">Login</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
