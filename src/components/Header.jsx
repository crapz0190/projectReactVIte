import { Navbar } from "./Navbar";
import { NavLink } from "react-router-dom";
import "../css/header.css"
import imageHero from "../images/mobile/image-hero.jpg"

export function Header() {
  return(
    <div className="flexHeader">
      <img style={{width:"100%", height:"100vh", position:"relative"}} src={imageHero} alt="" />
      <div style={{position:"absolute", top:"0", left:"0", right:"0"}} className="flexNav">
        <Navbar />
      </div>
    </div>
  )
}