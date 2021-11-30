import React from 'react';
import BlogIndex from './BlogIndex';

const Blog = (props) => {

    const { title, category } = props;

    return (
        <div>
            <BlogIndex />
        </div>
    );
}

export default Blog;