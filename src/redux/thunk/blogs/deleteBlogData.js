import { deleteBlog } from "../../actionCreators/blogActions";

const deleteBlogData = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/blog/${id}`, {
            method: "DELETE",
            header: {
                "content-type": "application/json"
            },
        });
        const data = await res.json();

        if (data.acknowledged) {
            dispatch(deleteBlog(id))
        }
    }
}

export default deleteBlogData;