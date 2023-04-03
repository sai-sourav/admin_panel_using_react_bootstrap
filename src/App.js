import { useContext, useState } from "react";
import "./App.css";
import AddProduct from "./Components/addProductForm/addProduct";
import Cart from "./Components/Cart/Cart";
import Layout from "./Components/Layout/Layout";
import ProductList from "./Components/ProductList/ProductList";
import CartContext from "./Context/cart-context";

function App() {
  const cartctx = useContext(CartContext)
  const [refresh, changerefresh] = useState(true);

  const updateRefresh = () => {
    changerefresh((prev) => !prev)
  }
  return (
    <div className="App">
      <Layout>
        <AddProduct refresh={updateRefresh} />
        <ProductList refresh={refresh} />
      </Layout>
      <Cart show={cartctx.showCart} onHide={() => cartctx.updateshowCart()} />
    </div>
  );
}

export default App;
