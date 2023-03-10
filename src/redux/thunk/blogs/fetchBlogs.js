import { isLoadingAction, loadBlog } from "../../actionCreators/blogActions";

const loadBlogData = () => {
    return async (dispatch, getState) => {
        const res = await fetch("https://shakur-blog-server.vercel.app/showblog");
        const data = await res.json();
        // console.log(data, "fetch");
        if (data.length) {
            dispatch(loadBlog(data))
        }
    };
}

export default loadBlogData;