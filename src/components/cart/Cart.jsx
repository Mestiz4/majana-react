import {useContext, useState} from 'react'
import { CartContext } from '../../context/CartContext'
import Form from '../form/Form'

const Cart = () => {

    const { cart, clearCart, getTotalPrice, deleteProductById } =  useContext( CartContext )

    const [buy, setBuy] =useState (false)
    const [orderId, setOrderId] =useState (null)

    console.log(orderId)
  
    if(orderId){
      return <div>
        <p>tu orden de compra es: {orderId}</p>
      </div>
    }

  return (
    <div>
      {
      cart.map (item =>(
        <div key={item.id} >
            <h2>{item.nombre}</h2>
            <h2>{item.precio}</h2>
            <h2>{item.quantity} unidades</h2>
            <button onClick={()=>deleteProductById(item.id)}>QUITAR ESTE PRODUCTO</button>
          </div>
      )
      )
}
    

  <div>
    <p>Descripción del carrito:</p>
    <p>Cantidad de productos:</p>
    <p>Precio total:{ getTotalPrice() }</p>
  </div>
  
  {
    buy ? (<Form cart={cart} getTotalPrice={getTotalPrice} setOrderId={setOrderId} clearCart={clearCart} />) : (
  <div>
    <button onClick={()=> setBuy(true)}>COMPRAR</button>
    <button onClick={()=> clearCart()} >VACIAR CARRITO</button>
  </div>
    )
  }


</div>

  )
}



export default Cart