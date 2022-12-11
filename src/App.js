
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import Navbar from "./components/navBar/NavBar"


function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"Hola"} />
    </div>
  );
}

export default App;
