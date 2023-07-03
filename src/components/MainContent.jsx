import "../css/mediaQMainContent.css"
import { useEffect, useState } from "react";
import { data } from "../data/data"
import { ItemCard } from "./ItemCard";
import imgMain  from "../../public/images/desktop/image-interactive.jpg";

export function MainContent() {

  const [getInfo, setGetInfo] = useState([]);

  const getData = new Promise((res, rej) => {
    setTimeout(() => {
      res(data)
    }, 2000)
  });

  useEffect(() => {
    async function getResp() {
      try {
        const response = await (getData)
        // console.log(response)
        setGetInfo(response)
      } catch (error) {
        console.log(error)
      }
    }
    getResp()
  }, [])

  return(
    <main style={{paddingBottom:"120px"}} className="container px-5 position-relative">
      <section className="sectionMainFirst pt-5">
        <img style={{width:"100%", marginTop:"50px"}} src={imgMain} alt="image-interactive" />
        <div className="textContent container mt-5 text-center f">
          <h2 style={{fontFamily:"'Josefin Sans', sans serif", letterSpacing:"1px"}} className="fs-1 text-uppercase fw-medium">the leader in interactive vr</h2>
          <p className="text-secondary fw-medium mt-4">Founded in 2011, Loopsstudios has been producing world-class virtual reality projects for the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
        </div>
      </section>
      <section className="sectionMainSecond container mt-5">
        <h2 style={{fontFamily:"'Josefin Sans', sans serif"}} className="fs-1 text-uppercase fw-medium text-center">our creations</h2>
        <button style={{width:"150px", height:"40px", textAlign:"center", marginBottom:"30px", letterSpacing:"4px"}} className="position-absolute bottom-0 start-50 translate-middle border border-black text-uppercase fw-medium bg-light">see all</button>
      </section>
      <ItemCard info={getInfo} />
    </main>
  )
}