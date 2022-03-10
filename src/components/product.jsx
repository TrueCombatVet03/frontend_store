import "./product.css";
import QuanityPicker from "./quanityPicker";

const Product = () => {
    return(
        <div className="product">
            <img src="https://picsum.photos/200/300" alt="product img"></img>
            <h2>Title</h2>
            <label>$Price</label>
            <label>$total</label>
            <QuanityPicker></QuanityPicker>
            <button>Add</button>
        </div>
    );

};

export default Product;