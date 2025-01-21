import { useEffect } from "react";
import { getPost } from "./api/PostApi";

const App =() =>{
  // console.log(getPost ());

  const getPostData =async()=>{
    const res = await getPost();
    console.log(res.data);

  }
  useEffect(()=>{
    getPostData();
  },[]);
  return <h1>Hello React curd Operation</h1>
};



export default App;