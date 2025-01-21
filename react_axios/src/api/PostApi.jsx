import axios from "axios";

const api = axios.create({
    baseURL : "https://jsonplaceholder.typicode.com",
});


// GET METHOD
export const getPost =() =>{
    return api.get("/posts");
} ;