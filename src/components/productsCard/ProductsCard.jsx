import "./ProductsCard.css"

const ProductsCard = ({element}) => {
  return (
    
    <div className="product-container">
            <h2>{element.nombre}</h2>
            <img className="img-product" src={element.img} />
            <p className="precio">${element.precio}</p>
        </div>
        
  )
}

export default ProductsCard