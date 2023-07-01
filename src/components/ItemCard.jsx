export function ItemCard({ info }) {
  return(
    <div>
       {
        info.map((item) => (
          <div key={item.id}>
            <section className="position-relative">
              <img style={{width:"100%", height:"100px", objectFit:"cover", marginTop:"20px"}} src={item.imageMobile} alt={item.name} />         
              <h3 className="position-absolute bottom-0 px-3 mb-3" style={{fontFamily:"Alata, sans serif", color:"#e3eaf0f6", paddingTop:"70px", width:"150px", height:"100%", fontSize:"1.3rem"}}>{item.name}</h3>
            </section>
          </div>
        ))
      }
    </div>
  )
}