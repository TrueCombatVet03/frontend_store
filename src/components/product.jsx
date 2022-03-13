import "./product.css";
import QuanityPicker from "./quanityPicker";
import {useState} from "react";

const Product = (props) => {

    const [quanity, setQuanity] = useState(1);

    const onQuanityChange = (value) => {
        console.log("Quanity changed", value);
        setQuanity(value);

    }

    const getTotal = () => {
        let total = quanity * props.data.price;
        return "$" + total.toFixed(2);
    }

    return(
        <div className="product">
            <img src={"/images/"+props.data.image}></img>
            <h2>{props.data.title}</h2>
            <label className="price">${props.data.price}</label>
            <label className="total">Total {getTotal()}</label>
            <QuanityPicker onChange={onQuanityChange}></QuanityPicker>
            <button className="btn btn-secondary">Add</button>
        </div>
    );

};

export default Product;