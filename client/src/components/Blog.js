import React from 'react';
import BlogIndex from './BlogIndex';
import BlogPost from './BlogPost';


const Blog = (props) => {

    const { title, category } = props;

    return (
        <div>
            {title == null || category == null ? <BlogIndex /> : <BlogPost title={title} category={category} />}                    
        </div>
    );
}

export default Blog;