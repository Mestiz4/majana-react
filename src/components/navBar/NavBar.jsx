import "./NavBar.css"
import {CartWidget} from "../cartWidget/CartWidget"

const NavBar = () =>{

    return(
        <div className="navbar-container">
            <div>
                <img className="logo-main" src="https://res.cloudinary.com/dt08n3f7k/image/upload/v1670710192/majana-logo_ik1feu.png" alt="main logo"/>
            </div>
            <ul className="navbar">
                <li className="navbar-item">Todos los productos</li>
                <li className="navbar-item">Pulpas</li>
                <li className="navbar-item">Tubérculos</li>
                <li className="navbar-item">Café</li>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar;