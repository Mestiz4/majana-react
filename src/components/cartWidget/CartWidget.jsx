import "./CartWidget.css"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {Link} from "react-router-dom"

export const CartWidget = () => {
  return (

    <Link to="/cart">
      <div className="cart">
      <AiOutlineShoppingCart size={25} color={"#fff"} />
    
</div>
</Link>
  )
}


