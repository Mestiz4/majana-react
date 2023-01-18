
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import Navbar from "./components/navBar/NavBar"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Form from "./components/form/Form";
import Cart from "./components/cart/Cart";
import CartContextProvider from "./context/CartContext";


function App() {
  return (
    <BrowserRouter>

    <CartContextProvider>
    
    <Navbar />

    <Routes>

      <Route path="/" element={<ItemListContainer />} />

      <Route path="/category/:categoryName" element={<ItemListContainer  />} />

      <Route path="/category" element={<ItemListContainer />} />
      
      <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
      
      <Route path="/cart" element={<Cart />} />
      
      <Route path="*" element={<h2>Error 404</h2>} />

      <Route path="/checkout" element={<Form />} />

    </Routes>
    </CartContextProvider>

    
    </BrowserRouter>
  );
}

export default App;