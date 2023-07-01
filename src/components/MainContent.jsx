import { useEffect, useState } from "react";
import { data } from "../data/data"
import { ItemCard } from "./ItemCard";
import imgMain  from "../images/desktop/image-interactive.jpg";

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
    <main style={{outline:"1px solid red", paddingBottom:"120px"}} className="container px-4 position-relative">
      <section className="pt-5">
        <img style={{width:"100%", marginTop:"50px"}} src={imgMain} alt="image-interactive" />
        <div className="container mt-5 p-4 text-center f">
          <h2 style={{fontFamily:"'Josefin Sans', sans serif"}} className="display-5 text-uppercase fw-medium">the leader in interactive vr</h2>
          <p className="text-secondary fw-medium">Founded in 2011, Loopsstudios has been producing world-class virtual reality projects for the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
        </div>
      </section>
      <section className="container">
        <h2 style={{fontFamily:"'Josefin Sans', sans serif"}} className="display-5 text-uppercase fw-medium text-center">our creations</h2>
        <button style={{width:"150px", height:"40px", textAlign:"center", marginBottom:"30px", letterSpacing:"4px"}} className="position-absolute bottom-0 start-50 translate-middle border border-black text-uppercase fw-medium bg-light">see all</button>
      </section>
      <ItemCard info={getInfo} />
    </main>
  )
}