import "../css/navbar.css";
import "../css/mediaQNavbar.css";
import logo from "../../public/images/logo.svg";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

export function Navbar() {

  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav)
  const closeMenu = () => setNav(false)

  return(
    <div>
      <div className="flexIconMenu">
        <NavLink><img src={logo} alt="logo" /></NavLink>
        <AiOutlineMenu className="menuSize delete" onClick={handleClick} color="white" style={{margin:"0", cursor:"pointer", position:"absolute", top:"45", right:"30"}} />
      </div>

      <nav className={nav ? "navContent" : "inactive"}>
        <div className="flexIconClose">
          <NavLink><img src={logo} alt="logo" /></NavLink>
          <AiOutlineClose className="closeSize" onClick={closeMenu} color="white" style={{margin:"0px", cursor:"pointer", position:"absolute", top:"45", right:"30"}} />
        </div>
        <ul className="linkGroup">
          <li className="itemLink"><NavLink to="/category/about">About</NavLink></li>
          <li className="itemLink"><NavLink to="/category/careers">Careers</NavLink></li>
          <li className="itemLink"><NavLink to="/category/events">Events</NavLink></li>
          <li className="itemLink"><NavLink to="/category/products">Products</NavLink></li>
          <li className="itemLink"><NavLink to="/category/support">Support</NavLink></li>
        </ul>
      </nav>
    </div>
    
  )
}