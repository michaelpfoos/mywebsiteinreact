import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate } from "react-router-dom";

const EditBlog = (props) => {    

    const { blogId } = props;

    const [blogData, setBlogData] = useState({
        category: "",
        title: "",
        posted: "",
        links: [""],
        paragraph: [{
            text: "",
            image: ""           
        }],
        images: [""],
        video: ""
    })

    const [errors, setErrors] = useState('');
    const [isPosted, setIsPosted] = useState(false);
    const [files, setFiles] = useState([]);
    const [additionalFiles, setAdditionalFiles] = useState([]);

    useEffect(()=>{

        const url = process.env.REACT_APP_API_URL + `api/blog/${blogId}`;
        
        axios.get(url)
            .then((res=>{
                setBlogData(res.data[0]);
            }))
            .catch((err)=>{
                console.log(err);
            });

    },[])

    const submitBlog = (e) => {
        //submit code goes here
        e.preventDefault();
        const url = process.env.REACT_APP_API_URL + `api/blog/${blogId}`;        

        const data = {
            category: blogData.category,
            title: blogData.title,
            posted: blogData.posted,
            links: blogData.links,
            paragraph: blogData.paragraph,
            images: blogData.images,
            video: blogData.video
        };       

        axios.put(url, data, { withCredentials: true })
        .then((res)=>{          
           setIsPosted(true);
        })
        .catch((err)=>{            
            setErrors(err.response.data.message);
        })       

    }

    const onChangeHandlers = (e) => {

        if ( e.target.name.substring(0, 9) === 'paragraph' )  {

            //Get the index of the paragraph
            const paragrahIndex = e.target.name.substring(
                e.target.name.indexOf("[") + 1, 
                e.target.name.lastIndexOf("]")
            );             

            const newStateObject = {...blogData};
            const paragraph = [...newStateObject.paragraph];
            paragraph[paragrahIndex].text = e.target.value;
            newStateObject.paragraph = paragraph; 
            setBlogData(newStateObject);  
                              
        } 
        else if ( e.target.name.substring(0,5) === 'links' ) {
            //Get the index of the link
            const linkIndex = e.target.name.substring(
                e.target.name.indexOf("[") + 1, 
                e.target.name.lastIndexOf("]")
            );     

            const newStateObject = {...blogData};
            const link = [...newStateObject.links];
            link[linkIndex] = e.target.value;
            newStateObject.links = link;
            setBlogData(newStateObject);             
        }
        else if ( e.target.name.substring(0,4) === 'file' ) {
            //Get the index of the link
            const paragraphImageIndex = e.target.name.substring(
                e.target.name.indexOf("[") + 1, 
                e.target.name.lastIndexOf("]")
            );  
            
            //strip the path from the file name and add the category and the first 4 chars of the title to the front.
            // eslint-disable-next-line react-hooks/exhaustive-deps
            const filename = blogData.category + blogData.title.substring(0, 4) + e.target.value.replace(/^.*[\\\/]/, '');                  

            //Push the file name in to state for database storage
            const newStateObject = {...blogData};
            const paragraph = [...newStateObject.paragraph];            
            paragraph[paragraphImageIndex].image = filename;       
            newStateObject.paragraph = paragraph;             
            setBlogData(newStateObject);   
            
            //now store the file in state.
            const filesStateObject = [...files];
            filesStateObject[paragraphImageIndex] = e.target.files;
            setFiles(filesStateObject);

            
        } 
        else if ( e.target.name.substring(0,5) === 'afile' ) {
            //Get the index of the link
            const additionalFileIndex = e.target.name.substring(
                e.target.name.indexOf("[") + 1, 
                e.target.name.lastIndexOf("]")
            );     
        
            //strip the path from the file name and add the category and the first 4 chars of the title to the front.
            // eslint-disable-next-line react-hooks/exhaustive-deps
            const filename = blogData.category + blogData.title.substring(0, 4) + e.target.value.replace(/^.*[\\\/]/, '');  

            //Push the file name in to state for database storage
            const newStateObject = {...blogData};
            const images = [...newStateObject.images];
            images[additionalFileIndex] = filename;
            newStateObject.images = images; 
            setBlogData(newStateObject);  

            //push the file in to state.
            const newFileObject = [...additionalFiles]
            newFileObject[additionalFileIndex] = e.target.files;
            setAdditionalFiles(newFileObject);

            
        } 
            
        else {
            const newStateObject = {...blogData};
            newStateObject[e.target.name] = e.target.value;        
            setBlogData(newStateObject);   
        }           
    }

    const addParagraph = (e) => {       

        const newStateObject = {...blogData};
        const newParagraph = [...newStateObject.paragraph, {
            text: '',
            image: ''
        }];

        newStateObject.paragraph = newParagraph;
        setBlogData(newStateObject);
    }

    const addLink = (e) => {        

        const newStateObject = {...blogData};
        const newLink = [...newStateObject.links, '']

        newStateObject.links = newLink;
        setBlogData(newStateObject);
    }

    const addAdditionalFile = (e) => {        

        const newStateArray = [...additionalFiles, {}];
        setAdditionalFiles(newStateArray);      

    }

    return (
        isPosted === true ? <Navigate to='/blog/' /> :
        <div className="container-md">
            <form id="form" encType="multipart/form-data" className="container-md mt-5 mb-5 p-5 border border-dark border-2 rounded">
                <h1 className="text-center">Edit Blog</h1>
                <label className="form-label fw-bold">Category</label>
                <input onChange={onChangeHandlers} name="category" type="text" value={blogData.category} className="form-control mb-3" />            
                <label className="form-label fw-bold">Title</label>                
                <input onChange={onChangeHandlers} name="title" type="text" value={blogData.title} className="form-control mb-3" />           
                {
                    blogData.links.map((link, linkIndex) => {
                        return (
                            <div key={linkIndex} className="border border-1 border-secondary p-3 mb-2 rounded">
                                <label className="form-label fw-bold">Link</label>
                                <input onChange={onChangeHandlers} value={blogData.links[linkIndex]} name={`links[${linkIndex}]`} type="text" className="form-control mb-3" />  
                            </div>
                        );
                    })
                }
                <input className="btn btn-secondary mb-3 mt-3" onClick={addLink} type="button" value="Add Link"/>       
                {
                    blogData.paragraph.map((element, index) => {
                        return (
                            <div className="border border-1 border-secondary p-3 mb-2 rounded" key={index}>
                                <label className="form-label fw-bold">Paragraph</label>  
                                <textarea onChange={onChangeHandlers} value={blogData.paragraph[index].text} name={`paragraph[${index}]`} className="form-control" />                                                                                         
                            </div>
                        );
                    })
                }
                <input className="btn btn-secondary mt-3 mb-3" onClick={addParagraph} type="button" value="Add Paragraph"/>              
                <h2>Video</h2>
                <label className="form-label fw-bold mt-3">Url</label>
                <input className="form-control" onChange={onChangeHandlers} value={blogData.video} type="text" name="video" />
                <input type="submit" onClick={submitBlog} value="Submit Updates" className="btn btn-secondary mt-4" />   
                {errors === '' ? null : <p className="mt-3 fs-5 text-danger">{errors}</p> }           
            </form>
        </div>
    );
}

export default EditBlog;