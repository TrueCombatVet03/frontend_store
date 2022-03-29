import "./product.css";
import QuanityPicker from "./quanityPicker";
import {useState, useContext} from "react";
import store from "./../context/storeContext";

const Product = (props) => {

    const [quanity, setQuanity] = useState(1);

    const addProdToCart = useContext(store).addProdToCart;

    const onQuanityChange = (value) => {
        console.log("Quanity changed", value);
        setQuanity(value);

    };

    const getTotal = () => {
        let total = quanity * props.data.price;
        return "$" + total.toFixed(2);
    };

    const addProduct = () => {

        let cartProd = {...props.data};
        cartProd.quanity = quanity;

        addProdToCart(cartProd);

        
    };

    return(
        <div className="product">
            <img src={"/images/"+props.data.image}></img>
            <h2>{props.data.title}</h2>
            <label className="price">${props.data.price}</label>
            <label className="total">Total {getTotal()}</label>
            <QuanityPicker onChange={onQuanityChange}></QuanityPicker>
            <button onClick={addProduct} className="btn btn-secondary">Add</button>
        </div>
    );

};

export default Product;