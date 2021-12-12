import React, { useState, useEffect } from 'react';
import styles from './BlogPost.module.css';
import axios from 'axios';
import { useLocation, Navigate } from 'react-router-dom'
import moment from 'moment';

const BlogPost = (props) => {   
    const [redirect, setRedirect] = useState(false);   
    const [post, setPost] = useState({});
    const location = useLocation();    
    const url = process.env.REACT_APP_API_URL + 'files/';  


    useEffect(()=>{
        if (location.state === null) {
            setRedirect(true);
        }
        else {                     
            const url = process.env.REACT_APP_API_URL + `api/blog/${location.state.blogId}`;                         

            axios.get(url)
                .then((res=>{
                    setPost(res.data[0]);
                }))
                .catch((err=>{
                    console.log(err);
                }));
        }
    }, [location.state])

    return (
        redirect === true ? <Navigate to='/blog/' /> :
        <div className="container-md bg-light">
            <h1 className="mt-5 mb-0">{post.title}</h1>
            <p className="fs-4 mt-0 mb-0">Category: {post.category}</p>
            <p className="fs-4 mt-0">Date Posted: {moment(post.posted).format('MM/DD/YYYY')}</p>
            {post.paragraph == null ? null :
                post.paragraph.map((value, index ) => {
                    return (
                        <div className="container" key={index}>
                            <div className="row">                                 
                                <p className="d-inline fs-4 lh-2">
                                {value.image ? <img className={`${styles.cximg} ${index === 0 || index % 2 === 0 ? 'float-start' : 'float-end'} rounded img-thumbnail`} alt='' src={url + value.image} /> : null}
                                {value.text}                                
                                </p>      
                            </div>                      
                        </div>
                    );
                })
            }
            {post.images == null ? null :
                post.images.map((value, index )=> {
                    return (
                        <img key={index} className={`${styles.addimages} mt-1 mb-1`} alt='' src={url + value} />
                    );
                })             
            }
            {post.video == null ? null :
                <iframe src={post.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            }
            {post.links == null ? null : <ul className="list-group"><h3 className="mt-3">Links: </h3>
                {                            
                    post.links.map((value, index)=>{                    
                        return (
                            <li key={index} className="list-group-item"><a href={value}>{value}</a></li>
                        );
                    })
                }    
            </ul>}
          
            
        </div>
    )
}

export default BlogPost;