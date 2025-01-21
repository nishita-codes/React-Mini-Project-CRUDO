import axios from "axios";

const api = axios.create({
    baseURL : "https://jsonplaceholder.typicode.com",
});


// GET METHOD(READ)
export const getPost =() =>{
    return api.get("/posts");
} ;

// DELETE METHOD(DELETE)
export const deletePost =(id) =>{
    return api.delete(`/posts/${id}`);
} ;

// POST METHOD(CREATE)
export const postData = (post) =>{
    return api.post("/posts" , post);
}

// PUT MATHEOD(UPDATE)
export const updateData =(id, post)=>{
return api.put(`/posts/${id}`, post)
}