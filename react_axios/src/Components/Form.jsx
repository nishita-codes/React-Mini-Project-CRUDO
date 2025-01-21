import { useEffect, useState } from "react"
import { postData, updateData } from "../api/PostApi";

export const Form = ({ data, setData, updateDataApi, setUpdateDataApi }) => {

    const [addData, setAddData] = useState({
        title: "",
        body: "",
    });

    let isEmpty = Object.keys(updateDataApi).length === 0;
    //   get the updated data and add into the input filed
    useEffect(() => {
        updateDataApi &&
            setAddData({
                title: updateDataApi.title || "",
                body: updateDataApi.body || "",
            })
    }, [updateDataApi]);

    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setAddData((prev) => {
            //     console.log(prev);
            return {
                ...prev,
                [name]: value,
            }
        });
    };

    const addPostData = async () => {
        const res = await postData(addData);
        if (res.status === 201) {
            setData([...data, res.data]);
            setAddData({ title: "", body: "" });
        }
    }


    //  updatePostData
    const updateDataData = async () => {
        try {
            const res = await updateData(updateDataApi.id, addData);

            setData((prev) => {
                return prev.map((curElem) => {
                    return curElem.id === res.data.id ? res.data : curElem;
                })
            })
            setAddData({ title: "", body: "" });
            setUpdateDataApi({});
        } catch ({ error }) {
            console.log(error)
        }

    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const action = e.nativeEvent.submitter.value;
        if (action === "Add") {
            addPostData();
        } else if (action === " Edit") {
            updateDataApi();
        }
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
                    onChange={handleInputChange} />
            </div>
            <div>
                <input type="text"
                    placeholder="Add Body"
                    className="add_body"
                    name="body"
                    id="body"
                    autoComplete="off"
                    value={addData.body}
                    onChange={handleInputChange} />
            </div>
            <button type="submit" value={isEmpty ? "Add" : "Edit"}>{isEmpty ? "Add" : "Edit"}</button>
        </form>
    )
}