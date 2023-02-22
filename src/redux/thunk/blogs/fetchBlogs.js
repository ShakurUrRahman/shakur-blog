import { loadBlog } from "../../actionCreators/blogActions";

const loadBlogData = () => {
    return async (dispatch, getState) => {
        const res = await fetch("http://localhost:5000/");
        const data = await res.json();
        console.log(data, "fetch");
        if (data.length) {
            dispatch(loadBlog(data))
        }
    };
}

export default loadBlogData;