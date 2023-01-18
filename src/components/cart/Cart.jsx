import {useContext} from 'react'
import { CartContext } from '../../context/CartContext'

const Cart = () => {

    const { cart, clearCart } =  useContext( CartContext )


  return (
    <div>
      {
      cart.map (item =>(
        <div key={item.id} >
            <h2>{item.nombre}</h2>
            <h2>{item.precio}</h2>
            <h2>{item.quantity} unidades</h2>
          </div>
      )
      )
}
    <div>
    <p>¿Quieres limpiar el carrito?</p>
    <button onClick={()=> clearCart()} >Si, limpiar carrito</button>
  </div>
  </div>
  )
}

export default Cart