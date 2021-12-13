import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Blog from '../components/Blog';
import { useParams } from "react-router-dom";

const BlogView = (props) => {

    const { page, loggedIn, setLoggedIn } = props;    
    const { category, title } = useParams();    
    const [refresh, setRefresh] = useState(false);

    return(
        <div>
            <NavBar page={page} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            <Blog category={category} title={title} loggedIn={loggedIn} setLoggedIn={setLoggedIn} refresh={refresh} setRefresh={setRefresh} />                             
        </div>
    );
}

export default BlogView;