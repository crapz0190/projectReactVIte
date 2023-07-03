import "../css/mediaQItemCard.css";
import "../css/itemCard.css"

export function ItemCard({ info }) {
  return(
    <div className="flexItems">
       {
        info.map((item) => (
          <div className="cardsContent" key={item.id}>
            <section className="cards position-relative">
              <div className="shade">{item.name}</div>
              <picture>
                <source srcSet={item.imageMobile} media="(max-width: 833px)" />
                <source srcSet={item.imageDesktop} media="(min-width: 834px)" />
                <img style={{width:"100%", display:"block", marginTop:"20px"}} src={item.imageMobile} alt={item.name} />         
              </picture>
            </section>
          </div>
        ))
      }
    </div>
  )
}