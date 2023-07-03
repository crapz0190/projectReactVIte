import "../css/mediaQItemCard.css";
import "../css/itemCard.css"

export function ItemCard({ info }) {
  return(
    <div className="flexItems">
       {
        info.map((item) => (
          <div className="cardsContent" key={item.id}>
            <section className="cards position-relative">
              <div className="shade"></div>
              <picture>
                <source srcSet={item.imageMobile} media="(max-width: 833px)" />
                <source srcSet={item.imageDesktop} media="(min-width: 834px)" />
                <img style={{width:"100%", display:"block", marginTop:"20px"}} src={item.imageMobile} alt={item.name} />         
              </picture>
              <h3 className="mediaQuerie position-absolute bottom-0 px-3 mb-3" style={{fontFamily:"Josefin Sans, sans serif", color:"#e3eaf0f6", width:"150px", fontSize:"1.3rem"}}>{item.name}</h3>
            </section>
          </div>
        ))
      }
    </div>
  )
}