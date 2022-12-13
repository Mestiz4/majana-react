import "./NavBar.css"
import {CartWidget} from "../cartWidget/CartWidget"
import { Link } from "react-router-dom"

const NavBar = () =>{

    return(
        <div className="navbar-container">
            <div>
                <img className="logo-main" src="https://res.cloudinary.com/dt08n3f7k/image/upload/v1670710192/majana-logo_ik1feu.png" alt="main logo"/>
            </div>
            <ul className="navbar">
                <Link className="navbar-item" to="/">Todos los productos</Link>
                <Link className="navbar-item" to="/category/pulpa">Pulpas</Link>
                <Link className="navbar-item" to="/category/trozos">Trozos de fruta</Link>
                <Link className="navbar-item" to="/category/tuberculo">Tubérculos</Link>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar;