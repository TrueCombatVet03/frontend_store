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
    getCatalog(){
        return Catalog;
    }

    saveProduct(prod){
        console.log("Sending prod to server,,,,,,,NOT");
    }

    saveCoupon(prod){
        console.log("Sending Coupon discount");
    }
}

export default DataService;