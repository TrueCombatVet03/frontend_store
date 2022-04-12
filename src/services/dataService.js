import axios from "axios"






var Catalog = [
    {
        _id: "abcdefgh",
        title:"U.S Army",
        price: 19.99,
        stock: 15,
        category: "Clothing",
        image:"shirt1.jpg",
    },
    {
        _id: "abcdeefgh",
        title:"Infidel",
        price: 18.99,
        stock: 14,
        category: "Clothing",
        image:"shirt2.jpg",
    },
    {
        _id: "abcderrfgh",
        title:"Veteran",
        price: 15.99,
        stock: 12,
        category: "Clothing",
        image:"shirt3.jpg",
    },
    {
        _id: "abcdettfgh",
        title:"2ID",
        price: 17.99,
        stock: 16,
        category: "Clothing",
        image:"shirt4.jpg",
    },
    {
        _id: "abcdeyyfgh",
        title:"Seal",
        price: 19.99,
        stock: 10,
        category: "Clothing",
        image:"shirt6.jpg",
    },
    {
        _id: "abcdeuufgh",
        title:"DD-214",
        price: 19.99,
        stock: 10,
        category: "Clothing",
        image:"shirt5.png",
    }
];



class DataService{
    async getCatalog(){

    let resp = await axios.get("http://127.0.0.1:5000/api/catalog");
    return resp.data;
        //return Catalog;
    }

    async getCoupons(){
        let resp = await axios.get("http://127.0.0.1:5000/api/couponCode");
        return resp.data;
    }

    saveProduct(prod){
        console.log("Sending prod to server,,,,,,,NOT");
    }

    async saveCoupon(code){
        let resp = await axios.post("http://127.0.0.1:5000/api/couponCode", code);
        return resp.data;
    }
}

export default DataService;