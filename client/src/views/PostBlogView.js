import React from "react";
import NavBar from "../components/layout/NavBar";
import PostBlog from "../components/blog/PostBlog";

const PostBlogView = (props) => {
    const {loggedIn, setLoggedIn} = props;

    return (
        <div>
            <NavBar page={"post"} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            <PostBlog loggedIn={loggedIn} />
        </div>
    )
}

export default PostBlogView;