import Counter from "../counter/Counter"
import "./ProductsCard.css"

const ProductsCard = ({element}) => {

const onAdd = (quantity) =>{
console.log(`Compraste ${quantity} unidades`)
}

  return (
    
    <div className="product-container">
            <h2>{element.nombre}</h2>
            <img className="img-product" src={element.img} />
            <p className="precio">${element.precio}</p>
            <Counter initial={1} stock={element.stock} onAdd={onAdd}/>
        </div>
        
  )
}

export default ProductsCard