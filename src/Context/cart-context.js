import { createContext, useState } from "react";

const CartContext = createContext({
    showCart : "",
    updateshowCart : () => {},
    cartproducts : [],
    updateCartProducts : () => {}
})

export const CartContextProvider = (props) => {
    const [showCart, changeShowCart] = useState(false);
    const [cartproducts, changeCartProducts] = useState([]);
    const updateCartProducts = () => {
        changeCartProducts([])
    }
    const values = {
        showCart : showCart,
        updateshowCart : () => changeShowCart((prev) => !prev),
        cartproducts : cartproducts,
        updateCartProducts : updateCartProducts
    }

    return(<CartContext.Provider value={values}>{props.children}</CartContext.Provider>)

}


export default CartContext;
