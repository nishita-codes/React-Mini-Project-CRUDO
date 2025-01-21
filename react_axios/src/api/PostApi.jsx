import axios from "axios";

const api = axios.create({
    baseURL : "https://jsonplaceholder.typicode.com",
});


// GET METHOD
export const getPost =() =>{
    return api.get("/posts");
} ;

// DELETE METHOD
export const deletePost =(id) =>{
    return api.delete(`/posts/${id}`);
} ;

// POST METHOD
export const postData = (post) =>{
    return api.post("/posts" , post);
}