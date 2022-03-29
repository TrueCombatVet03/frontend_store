import store from "./storeContext";
import {useState} from "react";

const GlobalState = (props) => {
    const [cart,setCart] = useState([]);
    const [loggedInUser, setLoggedInUser] = useState([]);

    const addProdToCart = (prod) => {
        console.log("adding prod to cart");

        let copy = [...cart];
        copy.push(prod);
        setCart(copy);
    };

    const removeProdFromCart = () => {
        console.log("remove prod from cart");
    };


    return (
        <store.Provider value={{
            cart: cart,
            user: loggedInUser,
            addProdToCart: addProdToCart,
            removeProdFromCart: removeProdFromCart,
        }}
        >
            {props.children}
        </store.Provider>
    );
};

export default GlobalState;