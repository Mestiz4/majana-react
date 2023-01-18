import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import Counter from '../counter/Counter'

const ItemDetail = ( { product } ) => {

  const { addToCart, getQuantityById } = useContext( CartContext )

  const onAdd = ( quantity ) => {
    

    addToCart(
      {
        ...product,
        quantity: quantity
      }
    )

    

  }

  const quantity = getQuantityById( product.id )
  console.log(quantity)

  return (
    <div>
        <div style={{border: "2px solid black"}} onClick={()=>console.log("le di clic al div")} >
            <h2>{product.nombre}</h2>
            <h2>{product.precio}</h2>
            <h2>{product.descripcion}</h2>
        </div>

      <Counter onAdd={onAdd} stock={product.stock} initial= {quantity}/>

    </div>
  )
}

export default ItemDetail