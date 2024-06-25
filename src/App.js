import { useState } from "react";
import Header from "./components/Header";
import Shop from "./components/Shop";
import Product from "./components/Product";
import { CartContext } from "./Store/ShoppingCartContext";
import { DUMMY_PRODUCTS } from "./dummy-products";
import CartContextProvider from "./Store/ShoppingCartContext";
function App() {
  return (
    <CartContextProvider>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContextProvider>
  );
}

export default App;
