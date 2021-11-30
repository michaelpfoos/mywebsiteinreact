import React from 'react';
import NavBar from '../components/NavBar';
import Blog from '../components/Blog';
import { useParams }  from "react-router-dom";

const BlogView = (props) => {

    const { page } = props;
    const { category, title } = useParams();

    return(
        <div>
            <NavBar page={page} />
            <Blog category={category} title={title} />                    
        </div>
    );
}

export default BlogView;