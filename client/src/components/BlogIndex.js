import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import moment from 'moment';


const BlogIndex = (props) => {

    const [blogPost, setBlogPost] = useState([{}]);

    useEffect(()=>{
        const url = process.env.REACT_APP_API_URL + 'api/blog/';         

        axios.get(url)
        .then(res=>{
            setBlogPost(res.data);
        })
        .catch(err=>{
            console.log(err);
        });

    }, [])

    return(
        <div className="container-md">
            <h1 className="text-center mt-3">Blog Index</h1>            
            {blogPost ? blogPost.map((blogData, index)=>{
                return (
                <div className="mt-5 mb-5" key={index}>
                    <h2>Title: {blogData.title}</h2>
                    <p className="mb-0"><span className="fw-bold">Category:</span> {blogData.category}</p>
                    <p><span className="fw-bold">Posted Date:</span> {moment(blogData.posted).format('MM/DD/YYYY')}</p>                                   
                    <Link className="btn btn-secondary" 
                        to={`/blog/${blogData.category}/${blogData.title}`}
                        state={{ blogId: blogData._id }}
                    >Read Post</Link>                                   
                </div>
                );
            }) : null}
        </div>
    );
}

export default BlogIndex;