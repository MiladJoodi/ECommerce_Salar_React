import axios from "axios";

const client = axios.create({
    baseURL: "http://localhost:8001"
})

// Get All Products
export async function getProducts(){
    const {data} = await client("/products");

    return data;
}

// Get Single Product
export async function getProduct(id: string | number){
    const {data} = await client(`/products/${id}`);

    return data;
}