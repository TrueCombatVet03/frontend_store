import "./catalog.css";
import Product from "./product";
import DataService from "../services/dataService";
import {useEffect, useState} from "react";

const Catalog = () => {

    let [products, setProducts] = useState([]);

    const loadCatalog = () => {
        console.log("Data retreived");
        let service = new DataService();
        let data = service.getCatalog();
        setProducts(data);
    };

    useEffect(() =>{
        loadCatalog();
    });

    return(
        <div className="catalog">
            <div className="banner">
            
                <div className="col-md-4 social-col">
			    <a href=""
			    ><img
				className="img-responsive rounded mx-auto d-block"
				src="images/banner4.jpg"
				alt=""
			    /></a>
                </div>
            </div>
            <h2>We have {products.length} Products!!</h2>

            {products.map((prod) => (<Product key={prod._id} data={prod}/>))}

        </div>
    );
};

export default Catalog;