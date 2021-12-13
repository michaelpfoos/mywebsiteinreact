import React from "react";
import NavBar from "../components/NavBar";
import PostBlog from "../components/PostBlog";

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