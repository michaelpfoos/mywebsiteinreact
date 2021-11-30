import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import moment from 'moment';


const BlogIndex = (props) => {

    const [blogPost, setBlogPost] = useState([{}]);

    useEffect(()=>{
        
        const url = 'http://linuxhome:8000/api/blog/';

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
                    <p className="">Category: {blogData.category}</p>
                    <p>Posted Date: {moment(blogData.posted).format('MM/DD/YYYY')}</p>  
                    {
                        blogData.paragraph ? blogData.paragraph.map((para, pIndex) => {
                            return (
                                <p key={pIndex}>{para.text} Test</p>
                            );                            
                        }) : null 
                    }                      
                </div>
                );
            }) : null}
        </div>
    );
}

export default BlogIndex;