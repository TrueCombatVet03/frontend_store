var Catalog = [
    {
        _id: "abcdefgh",
        title:"Shirt",
        price: 19.99,
        stock: 15,
        category: "Clothing",
        image:"shirt1.jpg",
    },
    {
        _id: "abcdeefgh",
        title:"Shirt",
        price: 18.99,
        stock: 14,
        category: "Clothing",
        image:"shirt2.jpg",
    },
    {
        _id: "abcderrfgh",
        title:"Shirt",
        price: 15.99,
        stock: 12,
        category: "Clothing",
        image:"shirt3.jpg",
    },
    {
        _id: "abcdettfgh",
        title:"Shirt",
        price: 17.99,
        stock: 16,
        category: "Clothing",
        image:"shirt4.jpg",
    },
    {
        _id: "abcdeyyfgh",
        title:"Shirt",
        price: 19.99,
        stock: 10,
        category: "Clothing",
        image:"shirt6.jpg",
    },
    {
        _id: "abcdeuufgh",
        title:"Shirt",
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
}

export default DataService;