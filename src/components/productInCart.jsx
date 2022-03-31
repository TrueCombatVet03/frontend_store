

import "./productInCart.css";


const ProductInCart = (props) => {
    return (
        <div className="prod-cart">
            <img src={"/images/" + props.data.image}></img>
            <h6>{props.data.title}</h6>
            <label>{props.data.category}</label>


            <div className="prod-info">
                <label className="price">{props.data.price.toFixed(2)}</label>
                <label className="quanity">{props.data.price.quanity}</label>
                <label className="total">{props.data.total}</label>
                <button className="btn btn-sm btn-danger">Remove</button>
            </div>
        </div>
    );
};

export default ProductInCart;