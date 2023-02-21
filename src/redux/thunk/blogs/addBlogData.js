import { addBlog } from "../../actionCreators/blogActions";

const addBlogData = (blog, navigate) => {
    return async (dispatch, getState) => {
        const res = await fetch("http://localhost:5000/addblog", {
            method: "POST",
            body: JSON.stringify(blog),
            headers: {
                "content-type": "application/json"
            },
        });
        const data = await res.json();

        if (data.acknowledged) {
            dispatch(addBlog({
                _id: data.insertedId,
                ...blog
            }))
            navigate("/dashboard")
        }
    }
}

export default addBlogData;