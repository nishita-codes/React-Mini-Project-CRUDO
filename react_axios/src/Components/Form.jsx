import { useEffect, useState } from "react"
import { postData } from "../api/PostApi";

export const Form =({data,setData,updateDataApi, setUpdateDataApi})=>{

    const [addData, setAddData] = useState({
        title: "",
        body: "",
    });
//   get the updated data and add into the input filed
   useEffect(()=>{
    updateDataApi &&
    setAddData({
        title:  updateDataApi.title || "",
        body: updateDataApi.body || "",
    })
   },[updateDataApi]);

    const handleInputChange = (e)=> {
     const  name = e.target.name;
     const value = e.target.value;

     setAddData((prev)=>{
    //     console.log(prev);
    return {
        ...prev,
        [name]:value,
    }
     });
    };

    const addPostData= async()=>{
       const res= await postData(addData);
       if(res.status===201){
        setData([...data, res.data]);
        setAddData({title:"", body:""});
       }
    }
     
    const handleFormSubmit =(e)=>{
      e.preventDefault();

      addPostData();
    }
    return (
        <form className="section-form" onSubmit={handleFormSubmit}>
            <div>
            <input type="text" 
            placeholder="Add Title" 
            className="add_title" 
            name="title"
            autoComplete="off"
            id="title"
            value={addData.title} 
            onChange={handleInputChange}/>
            </div>


            <div>
            <input type="text"
             placeholder="Add Body"
              className="add_body" 
              name="body"
              id="body"
              autoComplete="off"
              value={addData.body} 
              onChange={handleInputChange}/>
            </div>
            <button type="submit">Add</button>
        </form>    
    )
}