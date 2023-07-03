import "../css/header.css";
import "../css/mediaQHeader.css";
import { Navbar } from "./Navbar";
import imageMobile from "../../public/images/mobile/image-hero.jpg"
import imageDesktop from "../../public/images/desktop/image-hero.jpg"

export function Header() {
  return(
    <header className="flexHeader">
      <div className="shade"></div>
      <picture>
        <source srcSet={imageMobile} media="(max-width: 480px)" />
        <source srcSet={imageDesktop} media="(min-width: 481px)" />
        <img src={imageMobile} alt="" />
      </picture>
      <Navbar style={{position:"absolute", top:"0", left:"0", right:"0"}} className="flexNav"/>
      <div className="titleContent">
        <h1>immersive experiences that deliver</h1>
      </div>
    </header>
  )
}