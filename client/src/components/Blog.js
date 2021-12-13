import React from 'react';
import BlogIndex from './BlogIndex';
import BlogPost from './BlogPost';


const Blog = (props) => {

    const { title, category, loggedIn, setLoggedIn, refresh, setRefresh } = props;

    return (
        <div>
            {title == null || category == null ? <BlogIndex loggedIn={loggedIn} setLoggedIn={setLoggedIn} refresh={refresh} setRefresh={setRefresh}  /> : <BlogPost loggedIn={loggedIn} setLoggedIn={setLoggedIn} title={title} category={category} />}                    
        </div>
    );
}

export default Blog;