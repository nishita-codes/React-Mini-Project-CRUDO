import { useEffect, useState } from "react";
import { getPost } from "../api/PostApi";

export const Post = () => {
    // console.log(getPost ());
    const [data, setData] = useState([]);
    const getPostData = async () => {
        const res = await getPost();
        console.log(res.data);
        setData(res.data);
    }
    useEffect(() => {
        getPostData();
    }, []);

    return <section className="section-post">
        <ol>
            {
                data.map((curElem) => {
                    const { id, body, title } = curElem;
                    return
                    <li keys={id}>
                        <p>{title}</p>
                        <p>{body}</p>
                        <button>Edit</button>
                        <button>Delete</button>
                    </li>
                })
            }
        </ol>
    </section>
}