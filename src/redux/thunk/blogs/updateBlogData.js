import { updatedBlog } from "../../actionCreators/blogActions";


const updateBlogData = (id, blog, navigate) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/updateblog/${id}`, {
            method: "PUT",
            body: JSON.stringify(blog),
            headers: {
                "Content-type": "application/json",
            },
        });
        const data = await res.json();
        console.log(data);
        if (data.acknowledged && data.modifiedCount > 0) {
            dispatch(
                updatedBlog({
                    _id: id,
                    blog,
                })
            );
            navigate("/dashboard")
        }
    }
}

export default updateBlogData;