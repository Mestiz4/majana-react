import { Link } from "react-router-dom"

import "./ProductsCard.css"

const ProductsCard = ({element}) => {



  return (
    
    <div className="product-container">
            <h2>{element.nombre}</h2>
            <img className="img-product" alt="" src={element.img} />
            <p className="precio">${element.precio}</p>
            <Link to={`/itemDetail/${element.id}`}>Ver detalle</Link>
            
        </div>
        
  )
}

export default ProductsCard