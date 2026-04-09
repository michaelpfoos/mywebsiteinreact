import React from "react";
import NavBar from "../components/layout/NavBar";
import EditBlog from "../components/blog/EditBlog";
import { useParams } from "react-router-dom";

const EditBlogView = (props) => {

    const { blogId, loggedIn, setLoggedIn } = useParams();  

    return (
        <div>
            <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            <EditBlog blogId={blogId}/>
        </div>
    )
}

export default EditBlogView;