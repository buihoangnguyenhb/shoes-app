const express = require("express");
const app = express();

const shoes = [
    {
        id: 1,
        name: "Giày Nike Blazer Mid '77 Vintage Nam - Xám Xanh",
        style: "snacker",
        price: "1000",
        description: "Giày snacker papapa",
        productBy: "nike",
        imageURL: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        },
        {
        id: 2,
        name: "Giày Lacoste Carnaby Evo BL21 Nam - Trắng",
        style: "snacker",
        price: "2000",
        description: "Giày snacker lutolute",
        productBy: "adiddas",
        imageURL: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80"
        },
        {
        id: 3,
        name: "Giày Lacoste Court-Drive Trainers Nam - Đen",
        style: "sport",
        price: "1500",
        description: "Giày thể thao ọp ẹp",
        productBy: "puma",
        imageURL: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        },
        {
        id: 4,
        name: "Giày Nike Revolution 6 Next Nature Nam - Trắng",
        style: "running",
        price: "3000",
        description: "Giày chạy bộ sacalazi",
        productBy: "bitis-hunter",
        imageURL: "https://images.unsplash.com/photo-1520256862855-398228c41684?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
        },
        {
        id: 5,
        name: "Lacoste Giày Lacoste Chaymon BL1 Nam - Xanh Navy",
        style: "leather",
        price: "900",
        description: "Giày da cá sấu cao cấp",
        productBy: "bitis-hunter",
        imageURL: "https://images.unsplash.com/photo-1626947346165-4c2288dadc2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        },
        {
        id: 6,
        name: "Giày Lacoste T-Clip 120 1 US Nam- Trắng Xám",
        style: "snacker",
        price: "10000",
        description: "Giày chạy bộ snacker nike",
        productBy: "nike",
        imageURL: "https://images.unsplash.com/photo-1562183241-b937e95585b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
        },
        {
        id: 7,
        name: "Adidas Giày adidas Galaxy 5 Nam - Xanh Navy",
        style: "snacker",
        price: "4000",
        description: "Giày chạy bộ snacker",
        productBy: "nike",
        imageURL: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        },
        {
        id: 8,
        name: "Adidas Giày adidas Galaxy 5 Nam - Xanh Navy",
        style: "snacker",
        price: "1000",
        description: "Giày chạy bộ bitis-hunter",
        productBy: "nike",
        imageURL: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80"
        },
        {
        id: 9,
        name: "Giày Nike Air Zoom Structure 24 Nam - Xanh Xám",
        style: "snacker",
        price: "3000",
        description: "Giày chạy bộ nike",
        productBy: "nike",
        imageURL: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
        },
        {
        id: 10,
        name: "Giày Lacoste Bayliss Deck 0121 Nam - Xanh Navy",
        style: "snacker",
        price: "1900",
        description: "Giày chạy bộ slip-up",
        productBy: "nike",
        imageURL: "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        },
        {
        id: 11,
        name:"Nike Giày Nike Air Zoom Pegasus 38 Nam - Xám",
        style: "snacker",
        price: "1700",
        description: "Giày chạy bộ slip-on",
        productBy: "nike",
        imageURL: "https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
        },
        {
        id: 12,
        name: "Nike Giày Nike Air Zoom Pegasus 38 Nam - Xám",
        style: "snacker",
        price: "13000",
        description: "Giày chạy bộ slip-on",
        productBy: "nike",
        imageURL: "https://images.unsplash.com/photo-1550399865-ec7d23b18e8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=694&q=80"
        },
]


app.get("/v1/shoes",(req, res) => {
    res.status(200).json(shoes);
})

app.listen("8000", () =>{
    console.log("server is running......");
})