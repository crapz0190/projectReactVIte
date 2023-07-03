import "../css/footer.css";
import logo from "../../public/images/logo.svg";
import { NavLink } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";



export function Footer() {
  return(
    <footer className="bg-black">
      {/* Primera sección */}

      <section style={{padding:"50px"}} className="footer m-5 pb-0">
        <NavLink><img src={logo} alt="logo" /></NavLink>
        <nav>
          <ul className="linkGroup">
            <li className="itemLink fs-6 text-capitalize"><NavLink to="/category/about">About</NavLink></li>
            <li className="itemLink fs-6 text-capitalize"><NavLink to="/category/careers">Careers</NavLink></li>
            <li className="itemLink fs-6 text-capitalize"><NavLink to="/category/events">Events</NavLink></li>
            <li className="itemLink fs-6 text-capitalize"><NavLink to="/category/products">Products</NavLink></li>
            <li className="itemLink fs-6 text-capitalize"><NavLink to="/category/support">Support</NavLink></li>
          </ul>
        </nav>
      </section>

      {/* Segunda sección */}

      <section className="contentIcons">
        <div className="icons">
          <AiFillFacebook color="white" size={40} />
          <BsTwitter color="white" size={40} />
          <BsPinterest color="white" size={40} />
          <BsInstagram color="white" size={40} />
        </div>
        <p className="m-0 mb-5 pt-4 pb-4 text-center text-secondary fw-medium"><span>©2023 Loopstudios. All rights reserved.</span></p>
      </section>
    </footer>
  )
}