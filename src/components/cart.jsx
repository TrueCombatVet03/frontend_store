import "./cart.css";
import { useContext } from "react";
import store from "../context/storeContext";
import ProductInCart from "./productInCart";


const Cart = () => {

    let {cart,addProdToCart} = useContext(store);

    return(
        <div className="cart-page">
            <h1>DD214 CLothing</h1>
            <h3>Never Leave A Fallen Comrade</h3>
            <h5>Are you ready to pay for the {cart.length} items in cart.</h5>

            <div className="products">
                {cart.map((prod) => (
                    <ProductInCart key={prod._id} data={prod}></ProductInCart>
                ))}
            </div>
        </div>    
    );
};






export default Cart;