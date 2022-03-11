import "./product.css";
import QuanityPicker from "./quanityPicker";

const Product = (props) => {
    return(
        <div className="product">
            <img src="./../images" alt="product img"></img>
            <h2>{props.title}</h2>
            <label className="price">$Price</label>
            <label className="total">$total</label>
            <QuanityPicker></QuanityPicker>
            <button className="btn btn-secondary">Add</button>
        </div>
    );

};

export default Product;