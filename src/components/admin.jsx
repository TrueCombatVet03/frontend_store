import "./admin.css"
import Product from './product';
import {useState, useEffect} from "react";
import DataService from "../services/dataService";

const Admin = () => {

    const [prod,setProd] = useState({});
    const [coupon, setCoupon] = useState({});
    const [allCoupons, setAllCoupons] = useState([]);
    const [newProduct, setNewProduct] = useState([]);

    const handleInputChange = (e) => {
            var copy = {... prod};
        copy[e.target.name] = e.target.value;
        setProd(copy);
    };

    const saveProduct = () =>{
        console.log(prod);

        let service = new DataService();
        service.saveProduct(prod);

        let copy = [...newProduct];
        copy.push(prod);
        setNewProduct(copy);

    };

    const couponCode = (e) => {
        var copy = {...coupon};
        copy[e.target.name] = e.target.value;
        setCoupon(copy);
    };

    const saveCoupon = async () => {
        console.log(coupon);

        let fixed = {...coupon};
        fixed.discount = parseInt(coupon.discount);

        let service = new DataService();
        service.saveCoupon(fixed);
        let resp = await service.saveCoupon(fixed);

        let copy = [...allCoupons];
        copy.push(coupon);
        setAllCoupons(copy);

        

        
    };

    const loadCoupons = async () => {
        let service = new DataService();
        let all = await service.getCoupons();
        setAllCoupons(all);
    };


    useEffect(() =>{
        loadCoupons();
    }, []);


    return (
        <div className="admin">
            <h1></h1>

            <section>
                <h3> Register New Product</h3>

                <div className="my-control">
                    <label>Title</label>
                    <input onChange={handleInputChange} name="title" type="text"></input>
                </div>

                <div className="my-control">
                    <label>Image:</label>
                    <input onChange={handleInputChange} name="image" type="text"></input>
                </div>

                <div className="my-control">
                    <label>Catagory:</label>
                    <input  onChange={handleInputChange} name="catagory" type="text"></input>
                </div>

                <div className="my-control">
                    <label>Price:</label>
                    <input onChange={handleInputChange} name="price" type="text"></input>
                </div>

                <div className="my-control">
                    <button className="btn btn-dark" onClick={saveProduct}>Save Product</button>
                </div>

                <div className="new-product">
                {newProduct.map((prod, index) =>( <div key={index}> <label>{prod.title}</label> - <label>{prod.price}</label>{""}</div>))}
                </div>
                
            </section>

            <section>
                <h2>Coupon Codes</h2>
                <div className="my-control2">
                    <label>Code:</label>
                    <input onChange={couponCode} name="code" type="text"></input>
                </div>

                <div className="my-control2">
                    <label>Discount:</label>
                    <input onChange={couponCode} name="discount" type="text"></input>
                </div>

                <div className="my-control2">
                    <button className="btn btn-dark" onClick={saveCoupon}>Send</button>
                </div>

                <div className="coupon-list">
                    {allCoupons.map((coupon, index) =>( <div key={index}> <label>{coupon.code}</label> - <label>{coupon.discount}</label>{""}</div>))}
                </div>

                
            </section>
        </div>
    );
};























export default Admin;