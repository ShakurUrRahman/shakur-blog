import { deleteBlog } from "../../actionCreators/blogActions";

const deleteBlogData = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/deleteblog/${id}`, {
            method: "DELETE",
            header: {
                "content-type": "application/json"
            },
        });
        const data = await res.json();
        // console.log(data);
        if (data.acknowledged && window.confirm("Are sure you want to delete?")) {
            dispatch(deleteBlog(id))
        }
    }
}

export default deleteBlogData;