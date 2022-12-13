
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import Navbar from "./components/navBar/NavBar"

import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
    
    <Navbar />

    <Routes>

      <Route path="/" element={<ItemListContainer />} />

      <Route path="/category/:categoryName" element={<ItemListContainer />} />

      <Route path="/category" element={<ItemListContainer />} />
      
      <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
      
      <Route path="/cart" element={<h3>Acá se muestra el carrito</h3>} />
      
      <Route path="*" element={<h2>Error 404</h2>} />

    </Routes>

    
    </BrowserRouter>
  );
}

export default App;