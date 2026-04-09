import react from 'react';
import axios from 'axios';

const DeleteButton = (props) => {

    const { blogId, refresh, setRefresh } = props;

    const deletePost = () => {        
        const url = (import.meta.env.VITE_API_URL || 'http://localhost:8000/') + `api/blog/${blogId}`;  
        
        axios.delete(url, { withCredentials: true })
            .then(res=>{
                console.log(res);
                setRefresh(!refresh);
            })
            .catch((err)=>{
                console.log(err);
            });
    }

    return (
        <input type="button" onClick={deletePost} className="btn btn-secondary ms-2" value="Delete" />        
    );

}

export default DeleteButton;